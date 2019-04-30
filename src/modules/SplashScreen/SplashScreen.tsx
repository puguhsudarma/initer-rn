import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { ISplashScreenReduxProps } from './SplashScreen.Container';

export interface ISplashScreenBaseProps {}

interface ISplashScreenProps extends ISplashScreenBaseProps, ISplashScreenReduxProps {}

interface ISplashScreenState {}

class SplashScreen extends PureComponent<ISplashScreenProps, ISplashScreenState> {
    render() {
        return <View style={styles.basic_container_center} />;
    }
}

const styles = StyleSheet.create({
    basic_container_center: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SplashScreen;
