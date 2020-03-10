import React, { useState } from 'react';
import { TextInput, TextInputProps, StyleSheet, View, Image, StyleProp, TextStyle } from 'react-native';
import { scale } from '../../utils/dimensions';
import color from '../../constants/color';
import { Button } from './Button';

export interface ICustomTextInput extends TextInputProps {
    customStyle?: StyleProp<TextStyle>;
}

export const CustomTextInput = (props: ICustomTextInput) => (
    <TextInput
        underlineColorAndroid="transparent"
        style={StyleSheet.flatten([styles.text_input, props.customStyle])}
        {...props}
    />
);

export interface IMyTextInput extends ICustomTextInput {
    prefixComponent?(): React.ReactNode;
    showButtonPassword?: boolean;
    error?: boolean;
}

export const MyTextInput = (props: IMyTextInput) => {
    const [showPassword, setShowPassword] = useState(true);

    return (
        <View style={[styles.field_container, { borderColor: props.error ? color.RED : color.BLACK }]}>
            {props.prefixComponent && props.prefixComponent()}
            <View style={{ flex: 1 }}>
                <CustomTextInput
                    {...props}
                    secureTextEntry={props.showButtonPassword ? showPassword : props.secureTextEntry}
                />
            </View>

            {props.showButtonPassword && (
                <Button action={() => setShowPassword(!showPassword)}>
                    <Image
                        source={
                            showPassword
                                ? require('../../images/eye.png')
                                : require('../../images/eye-hidden.png')
                        }
                        style={styles.eye_image}
                        resizeMode="contain"
                    />
                </Button>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    text_input: {
        padding: 0,
        margin: 0,
        minHeight: scale.w(50),
        fontFamily: 'MavenPro-Regular',
        fontSize: scale.w(16),
        color: color.BLACK,
    },
    field_container: {
        flexDirection: 'row',
        minHeight: scale.w(50),
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: scale.w(15),
    },
    eye_image: {
        width: scale.w(20),
        height: scale.w(20),
        marginLeft: scale.w(16),
    },
});
