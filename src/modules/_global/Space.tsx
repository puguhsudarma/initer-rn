import React from 'react';
import { View } from 'react-native';
import { scale } from '../../utils/dimensions';
import color from '../../constants/color';

interface ISpaceProps {
    height?: number;
    width?: number;
}

export const Space = (props: ISpaceProps) => (
    <View
        style={{
            height: scale.w(props.height ? props.height : 10),
            width: scale.w(props.width ? props.width : 0),
        }}
    />
);

interface IHrProps {
    bgColor?: string;
    height?: number;
    top?: number;
    bottom?: number;
    horizontal?: number;
    bg?: boolean;
}

export const Hr = ({ bgColor, height, top, bottom, horizontal, bg }: IHrProps) => (
    <View
        style={{
            height: scale.w(height || 1),
            backgroundColor: bgColor ? bgColor : bg ? color.GREY_BG : color.GREY_HR,
            marginHorizontal: scale.w(horizontal || 0),
            marginTop: scale.w(top || 0),
            marginBottom: scale.w(bottom || 0),
        }}
    />
);
