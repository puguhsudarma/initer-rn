import React from 'react';
import { StyleSheet, View } from 'react-native';
import color from '../../constants/color';
import { ISplashScreenReduxProps } from './SplashScreen.Container';

interface ISplashScreenProps extends ISplashScreenReduxProps {
    componentId: string;
}

class SplashScreen extends React.PureComponent<ISplashScreenProps> {
    render() {
        return <View style={styles.container}></View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.TURQUOISE,
    },
});

export default SplashScreen;
