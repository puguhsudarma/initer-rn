import * as Animatable from 'react-native-animatable';
import { screenWidth } from './dimensions';

export default () => {
    Animatable.initializeRegistryWithDefinitions({
        leftToRight: {
            from: { left: -screenWidth + 200 },
            to: { left: screenWidth + 200 },
        },
        rightToLeft: {
            from: { left: screenWidth + 200 },
            to: { left: -screenWidth },
        },
        zoomOutAnimated: {
            0: {
                opacity: 1,
                scaleX: 0.5,
                scaleY: 0.5,
            },
            0.25: {
                opacity: 0,
                scaleX: 1,
                scaleY: 1,
            },
        },
    });
};
