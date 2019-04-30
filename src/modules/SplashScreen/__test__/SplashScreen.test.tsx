import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import SplashScreen from '..//SplashScreen';

describe('SplashScreen', () => {
    it('Render splashscreen to match snapshot', () => {
        const wrapper = shallow(<SplashScreen />);
        expect(wrapper).toMatchSnapshot('splashscreen snapshot');
    });
});
