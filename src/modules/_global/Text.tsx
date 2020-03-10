import React from 'react';
import { Text } from 'react-native';
import { scale } from '../../utils/dimensions';
import color from '../../constants/color';
import { Space } from './Space';

interface IDefaultTextProps {
    fontFamily?: string;
    color?: string;
    fontSize?: number;
    textAlign?: 'auto' | 'left' | 'center' | 'right' | 'justify';
    textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom';
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
    textDecorationColor?: string;
    numberOfLines?: number;
    lineHeight?: number;
    children: React.ReactNode;
}

const DefaultText = (props: IDefaultTextProps) => (
    <Text
        style={{
            fontFamily: props.fontFamily ? props.fontFamily : 'MavenPro-Regular',
            color: props.color || color.BLACK,
            fontSize: props.fontSize || scale.w(12),
            textAlign: props.textAlign,
            textAlignVertical: props.textAlignVertical ? props.textAlignVertical : 'center',
            textDecorationLine: props.textDecorationLine,
            textDecorationColor: props.textDecorationColor,
            backgroundColor: 'transparent',
            includeFontPadding: false,
            lineHeight: props.lineHeight,
        }}
        numberOfLines={props.numberOfLines}
    >
        {props.children}
    </Text>
);

export const BigTitle = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="ChakraPetch-Bold" fontSize={scale.w(28)} lineHeight={scale.w(28)} />
);

export const Title = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="ChakraPetch-Bold" fontSize={scale.w(20)} />
);

export const Subtitle = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="ChakraPetch-Regular" fontSize={scale.w(20)} />
);

export const Label = (props: IDefaultTextProps & { error?: boolean }) => (
    <DefaultText
        {...props}
        fontFamily="ChakraPetch-Bold"
        fontSize={scale.w(12)}
        color={props.error ? color.RED : color.GREY_LABEL}
    />
);

export const LabelValidationError = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="MavenPro-Regular" fontSize={scale.w(12)} color={color.RED} />
);

export const LabelButton = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="ChakraPetch-Bold" fontSize={scale.w(14)} />
);

export const P = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="MavenPro-Regular" fontSize={scale.w(16)} />
);

export const SubHeader = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="MavenPro-Bold" fontSize={scale.w(18)} />
);

export const ChakraPetchBold = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="ChakraPetch-Bold" />
);

export const ChakraPetchLight = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="ChakraPetch-Light" />
);

export const ChakraPetchRegular = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="ChakraPetch-Regular" />
);

export const MavenProBold = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="MavenPro-Bold" />
);

export const MavenProRegular = (props: IDefaultTextProps) => (
    <DefaultText {...props} fontFamily="MavenPro-Regular" />
);

interface ITextContentProps {
    label: string;
    content: string;
    contentBold?: boolean;
}

export const TextContent = ({ label, content, contentBold }: ITextContentProps) => (
    <React.Fragment>
        <Label>{label.toUpperCase()}</Label>
        <Space height={3} />
        {contentBold ? (
            <ChakraPetchBold color={color.TURQUOISE} fontSize={scale.w(16)}>
                {content}
            </ChakraPetchBold>
        ) : (
            <P>{content}</P>
        )}
    </React.Fragment>
);
