import { Alert, ToastAndroid, Platform } from 'react-native';

const toast = (msg: string | { message: string }, title: any = null) => {
    const message = typeof msg !== 'string' ? msg.message : msg;

    if (Platform.OS === 'ios') {
        Alert.alert(title, message);
    } else {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }
};

export default toast;
