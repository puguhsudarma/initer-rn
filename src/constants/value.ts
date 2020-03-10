import color from './color';
import { Platform } from 'react-native';

export const SHADOW = Platform.select({
    ios: {
        backgroundColor: color.GREY_BG,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    android: {
        backgroundColor: color.GREY_BG,
        elevation: 4,
    },
});
