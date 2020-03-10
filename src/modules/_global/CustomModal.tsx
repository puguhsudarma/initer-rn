import React from 'react';
import Modal from 'react-native-modal';
import { screenWidth, fullHeight } from '../../utils/dimensions';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';

interface ICustomModalProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    backdropOpacity?: number;
    avoidKeyboard?: boolean;
}

interface ICustomModalState {
    visible: boolean;
}

class CustomModal extends React.PureComponent<ICustomModalProps, ICustomModalState> {
    constructor(props: ICustomModalProps) {
        super(props);

        this.state = {
            visible: false,
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    public show() {
        this.setState({ visible: true });
    }

    public hide() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <Modal
                useNativeDriver
                hideModalContentWhileAnimating
                animationIn="fadeIn"
                animationInTiming={100}
                animationOut="fadeOut"
                animationOutTiming={100}
                isVisible={this.state.visible}
                deviceWidth={screenWidth}
                deviceHeight={fullHeight}
                supportedOrientations={['portrait']}
                avoidKeyboard={this.props.avoidKeyboard}
                backdropOpacity={this.props.backdropOpacity || 0.7}
                style={StyleSheet.flatten([{ margin: 0 }, this.props.style])}
            >
                {this.props.children}
            </Modal>
        );
    }
}

export default CustomModal;
