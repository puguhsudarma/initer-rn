import * as React from 'react';
import { shallow } from 'enzyme';
import SplashScreen from '../SplashScreen';

describe('Splash Screen', () => {
    it('splashscreen should match with the snapshot', () => {
        const props = {
            isLoggedIn: false,
            componentId: 'splashscreen',
        };

        const wrapper = shallow(<SplashScreen {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
