import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import SplashScreen from '../modules/SplashScreen/SplashScreen.Container';

export default (store: Store) => {
    Navigation.registerComponentWithRedux('SplashScreen', () => SplashScreen, Provider, store);
};
