import React from 'react';
import { TouchableOpacity, View, StyleSheet, ActivityIndicator } from 'react-native';
import { debounce } from 'lodash';
import color from '../../constants/color';
import { LabelButton } from './Text';
import { scale } from '../../utils/dimensions';

interface IButtonProps {
    action(): void;
    children: React.ReactNode;
    disabled?: boolean;
    activeOpacity?: number;
}

export const Button = (props: IButtonProps) => (
    <TouchableOpacity
        onPress={debounce(props.action, 1000, { leading: true, trailing: false })}
        activeOpacity={props.activeOpacity || 0.6}
        disabled={props.disabled}
    >
        {props.children}
    </TouchableOpacity>
);

interface IPrimaryButtonProps extends IButtonProps {
    label: string;
    loading?: boolean;
    isBlock?: boolean;
}

export const PrimaryButton = (props: IPrimaryButtonProps) => (
    <View
        style={{
            height: scale.w(50),
            backgroundColor: color.WHITE,
            width: !props.isBlock ? scale.w(140) : undefined,
        }}
    >
        <Button {...props} action={props.action} disabled={props.disabled || props.loading}>
            <View
                style={StyleSheet.flatten([
                    styles.primary_btn,
                    {
                        width: !props.isBlock ? scale.w(140) : undefined,
                    },
                ])}
            >
                {props.loading ? (
                    <ActivityIndicator color={color.BLACK} size="small" />
                ) : (
                    <LabelButton textAlign="center">{props.label}</LabelButton>
                )}
            </View>
        </Button>
    </View>
);

export const SecondaryButton = (props: IPrimaryButtonProps) => (
    <View
        style={{
            height: scale.w(50),
            width: !props.isBlock ? scale.w(140) : undefined,
            backgroundColor: color.WHITE,
        }}
    >
        <Button {...props} action={props.action} disabled={props.disabled}>
            <View
                style={StyleSheet.flatten([
                    styles.primary_btn,
                    {
                        backgroundColor: color.WHITE,
                        width: !props.isBlock ? scale.w(140) : undefined,
                    },
                ])}
            >
                <LabelButton textAlign="center">{props.label}</LabelButton>
            </View>
        </Button>
    </View>
);

const styles = StyleSheet.create({
    primary_btn: {
        height: scale.w(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
});
