import { Linking, Platform } from 'react-native';
import numeral from 'numeral';

export const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const rand = () => [...Array(8).keys()].map(() => parseInt(`${Math.random() * 10}`, 10)).join('');

export const printUrl = (url: string, data: string[] | string) => {
    if (typeof data === 'string') {
        return url.replace(/{\w*}/gi, data);
    }

    let iterator = 0;
    return url.replace(/{\w*}/gi, () => data[iterator++]);
};

export const phoneCall = async (mobileNumber: string, prompt?: boolean) => {
    try {
        const url = `${Platform.OS === 'ios' && prompt ? 'telprompt:' : 'tel:'}${mobileNumber}`;

        const canOpen = await Linking.canOpenURL(url);

        if (!canOpen) {
            throw new Error('cannot open phone call');
        }

        return Linking.openURL(url);
    } catch (err) {
        return err;
    }
};

export const repeat = <T>(num: number, whatTo: T): T[] => {
    var arr: T[] = [];

    for (var i = 0; i < num; i++) {
        arr.push(whatTo);
    }

    return arr;
};

export const findNameFile = (uri: string) => {
    const uriSplitted = uri.split('/');

    return uriSplitted[uriSplitted.length - 1];
};

export const price = (price: number) => numeral(price).format('0,0.00');

export const removeFile = (text: string) => text.replace(/(file:\/\/)/, '');

export const spaceToUnderscore = (text: string, replacement?: string) =>
    text.replace(/ /g, replacement || '_');
