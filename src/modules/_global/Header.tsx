import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { scale } from '../../utils/dimensions';
import color from '../../constants/color';
import { MavenProBold, ChakraPetchBold } from './Text';
import { View as ViewAnimatable } from 'react-native-animatable';
import { Button } from './Button';
import { getTop } from '../../utils/extraPad';

interface INavbarProps {
    title: string;
    leftAction?: () => void;
    close?: boolean;
    disabledLeft?: boolean;
    disabledRight?: boolean;
    rightAction?: () => void;
    rightText?: string;
    rightTextColor?: string;
    componentRight?: React.ReactNode;
}

export const Navbar = (props: INavbarProps) => (
    <View style={styles.container}>
        <ViewAnimatable
            useNativeDriver
            style={{ flexDirection: 'row', alignItems: 'center' }}
            animation="fadeInLeft"
            duration={400}
        >
            {props.leftAction ? (
                <Button action={props.leftAction} disabled={props.disabledLeft}>
                    <View style={styles.container_content_button}>
                        <Image
                            source={
                                props.close
                                    ? require('../../images/close.png')
                                    : require('../../images/back.png')
                            }
                            style={StyleSheet.flatten([styles.back_image, { marginRight: scale.w(10) }])}
                            resizeMode="contain"
                        />
                        <MavenProBold fontSize={scale.w(18)} color={color.WHITE_2}>
                            {props.title}
                        </MavenProBold>
                    </View>
                </Button>
            ) : (
                <View style={styles.title}>
                    <MavenProBold fontSize={scale.w(24)} color={color.WHITE_2}>
                        {props.title}
                    </MavenProBold>
                </View>
            )}

            {props.rightAction && (
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Button action={props.rightAction} disabled={!props.rightAction}>
                        <View style={styles.title}>
                            {props.componentRight ? (
                                props.componentRight
                            ) : props.rightText ? (
                                <ChakraPetchBold
                                    color={props.rightTextColor || color.WHITE_2}
                                    fontSize={scale.w(12)}
                                >
                                    {props.rightText}
                                </ChakraPetchBold>
                            ) : (
                                <Image
                                    source={require('../../images/more.png')}
                                    style={styles.back_image}
                                    resizeMode="contain"
                                />
                            )}
                        </View>
                    </Button>
                </View>
            )}
        </ViewAnimatable>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: scale.w(66) + getTop(),
        backgroundColor: color.TURQUOISE,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    title: {
        paddingVertical: scale.w(12),
        paddingHorizontal: scale.w(20),
    },
    container_content_button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale.w(20),
        paddingVertical: scale.w(12),
    },
    back_image: {
        width: scale.w(20),
        height: scale.w(20),
    },
});
