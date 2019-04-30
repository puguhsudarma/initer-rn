import { Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from './configs/registerScreens';
import * as navigationControl from './configs/navigationControl';
import { persistStore as persistStoreRaw } from 'redux-persist';
import configureStore from './configs/configureStore';

/**
 * Wait till our store is persisted
 * @param {store} storeToPersist - The redux store to persist
 * @returns {Promise} - Promise that resolves when the store is rehydrated
 */
const persistStore = (storeToPersist: any) => {
    return new Promise((resolve: any) => {
        persistStoreRaw(storeToPersist, undefined, () => {
            resolve();
        });
    });
};

/**
 * Set root screen for launch app for the first time
 */
const setRootScreen = () => {
    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: true,
        },
        layout: {
            backgroundColor: '#fff',
            orientation: ['portrait'],
        },
        animations: {
            setRoot: {
                alpha: {
                    from: 0,
                    to: 1,
                    duration: 400,
                    startDelay: 100,
                    interpolation: 'accelerate',
                },
            },
        },
    });

    Navigation.setRoot({
        root: navigationControl.splashscreen,
    });
};

/**
 * We register screens then we wait for
 *    - Store to be rehydrated
 * and then we finally initialize layout accordingly.
 */
const bootstrap = async () => {
    try {
        // disable yellow box
        console.disableYellowBox = true;

        // create the store
        const store = configureStore();

        // register the screen with the store
        registerScreens(store);

        // Add any more promises that must be resolved before layout is set
        await Promise.all([persistStore(store)]);

        // fire the screen for the first time
        setRootScreen();
    } catch (error) {
        if (__DEV__) {
            console.log('BOOTSTRAP: ', error);
        }

        Alert.alert('Sorry', 'Calibrate with your phone, please restart application.');
    }
};

/**
 * The initial listener of our app,
 * this will get triggered on app start or when the Android activity is recreated.
 * (For example by pressing back button on the root screen)
 */
let executeOnce = true;
Navigation.events().registerAppLaunchedListener(() => {
    if (executeOnce) {
        bootstrap();
        executeOnce = false;
    } else {
        setRootScreen();
    }
});
