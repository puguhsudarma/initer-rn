import { Layout, OptionsBottomTabs } from 'react-native-navigation';

export const bottomTabs: OptionsBottomTabs = {
    visible: false,
    drawBehind: true,
};

export const splashscreen: Layout = {
    component: {
        id: 'splashscreen',
        name: 'SplashScreen',
    },
};
