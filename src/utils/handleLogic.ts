import { AxiosError } from 'axios';
import toast from './toast';
import { logout } from '../actions/action.account';
import { IFailedResponse } from '../types/responseApi';
// import DocumentPicker from 'react-native-document-picker';
import { IState } from '../types/state';
// import ImagePicker, { ImagePickerResponse, ImagePickerOptions } from 'react-native-image-picker';

interface IHandleError {
    error: AxiosError;
    dispatch: any;
    displayMessage?: boolean;
    failedAction: object;
    onFailed?: (error: AxiosError) => void;
    delayShowMessage?: boolean;
}

export const handleError = ({
    error,
    dispatch,
    displayMessage = true,
    failedAction,
    onFailed,
    delayShowMessage = false,
}: IHandleError) => {
    // dispatch and log first
    dispatch(failedAction);

    if (onFailed) {
        onFailed(error);
    }

    // check for unauthorized
    if (error.response && error.response.status === 401) {
        dispatch(logout(true));
    }

    // display message if error from server
    if (displayMessage && error.response && error.response.data) {
        let msg = "Dont't worry, and please try again.";
        const { message, errors } = <IFailedResponse>error.response.data;

        // use message if there are
        if (message && message !== '') {
            msg = message;
        }

        // use specific errors for form
        if (errors) {
            msg = Object.keys(errors)
                .slice(0, 1)
                .reduce((prev, val) => errors[val][0], '');
        }

        if (delayShowMessage) {
            setTimeout(() => toast(msg, 'Attention'), 1500);
        } else {
            toast(msg, 'Attention');
        }
    }
};

export interface IRulesFormValidation {
    isValid: boolean;
    message: string;
}

export const handleFormValidation = (
    rules: IRulesFormValidation[],
    onSuccessValidation?: () => void,
    onFailedValidation?: (props: IRulesFormValidation) => void,
) => {
    let valid = true;
    rules.some((rule) => {
        if (!rule.isValid) {
            if (onFailedValidation) {
                onFailedValidation(rule);
            }
            valid = false;

            return true;
        }

        return false;
    });

    if (valid && onSuccessValidation) {
        onSuccessValidation();
    }
};

// export const openFile = async () => {
//     try {
//         const response = await DocumentPicker.pick({
//             type: [DocumentPicker.types.images, DocumentPicker.types.pdf, DocumentPicker.types.plainText],
//         });

//         if (__DEV__) {
//             console.log('DOCUMENT: ', { document: response });
//         }

//         return response;
//     } catch (error) {
//         throw error;
//     }
// };

export const asyncForEach = async <T>(
    array: T[],
    callback: (item: T, index: number, collection: T[]) => Promise<void>,
): Promise<void> => {
    for (let index = 0; index < array.length; index += 1) {
        await callback(array[index], index, array);
    }
};

export const getAuthToken = (getState: () => IState) => {
    if (getState().account.access_token !== '') {
        return {
            Accept: 'application/json',
            Authorization: `Bearer ${getState().account.access_token}`,
        };
    }

    return {
        Accept: 'application/json',
    };
};

// export const OpenImagePicker = (): Promise<ImagePickerResponse> => {
//     const pickerConfig: ImagePickerOptions = {
//         title: 'Select Attachment',
//         allowsEditing: false,
//         cameraType: 'back',
//         maxHeight: 960,
//         maxWidth: 540,
//         mediaType: 'photo',
//         quality: 0.7,
//         storageOptions: {
//             skipBackup: true,
//         },
//     };

//     return new Promise<ImagePickerResponse>((resolve, reject) =>
//         ImagePicker.showImagePicker(pickerConfig, (response) => {
//             // log it
//             if (__DEV__) {
//                 console.log('OPEN_IMAGE_PICKER: ', { imagePicker: response });
//             }

//             // on error
//             if (response.error) {
//                 toast(response.error, 'Error');

//                 reject(response.error);

//                 return 0;
//             }

//             // didCancel and customButton
//             if (response.didCancel || response.customButton) {
//                 reject([response.didCancel, response.customButton]);
//                 return 0;
//             }

//             // on Success
//             resolve(response);
//         }),
//     );
// };
