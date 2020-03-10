// import React from 'react';
// import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
// import color from '../../constants/color';
// import { scale } from '../../utils/dimensions';
// import * as Animatable from 'react-native-animatable';
// import Picker from 'react-native-wheel-picker';
// import CustomModal from './CustomModal';
// import { MavenProBold } from './Text';
// import { getBottom } from '../../utils/extraPad';

// interface IValue {
//     value: string;
//     label: string;
// }

// interface IPickerComboBoxProps {
//     values: IValue[];
//     selected: string;
//     onSubmit: (selected: string) => void;
// }

// interface IPickerComboBoxStates {
//     selected: string;
// }

// class PickerComboBox extends React.PureComponent<IPickerComboBoxProps, IPickerComboBoxStates> {
//     private modalRef = React.createRef<CustomModal>();
//     private bottomMenu = React.createRef<Animatable.View>();

//     constructor(props: IPickerComboBoxProps) {
//         super(props);

//         const selected = props.values.find(({ value }) => value === props.selected);

//         this.state = {
//             selected: selected?.value || props.values[0]?.value || '',
//         };

//         this.showModal = this.showModal.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//         this._onSubmit = this._onSubmit.bind(this);
//         this._onCancel = this._onCancel.bind(this);
//         this._onValueChange = this._onValueChange.bind(this);
//     }

//     UNSAFE_componentWillReceiveProps(nextProps: IPickerComboBoxProps) {
//         if (this.props.selected !== nextProps.selected) {
//             this.setState({ selected: nextProps.selected });
//         }
//     }

//     public showModal() {
//         if (this.modalRef.current) {
//             this.modalRef.current.show();
//         }
//     }

//     public async closeModal() {
//         if (this.bottomMenu.current && this.bottomMenu.current.slideOutDown) {
//             await this.bottomMenu.current.slideOutDown(300);

//             if (this.modalRef.current) {
//                 this.modalRef.current.hide();
//             }
//         } else {
//             if (this.modalRef.current) {
//                 this.modalRef.current.hide();
//             }
//         }
//     }

//     _onSubmit() {
//         const { selected } = this.state;
//         this.props.onSubmit(selected);
//         this.closeModal();
//     }

//     _onCancel() {
//         this.setState({ selected: this.props.selected });
//         this.closeModal();
//     }

//     _onValueChange(selected: number) {
//         const value = this.props.values[selected];
//         this.setState({ selected: value ? value.value : this.props.values[0].value });
//     }

//     render() {
//         const { selected } = this.state;
//         const { values } = this.props;
//         const selectedValue = values.findIndex(({ value }) => value === selected);

//         return (
//             <CustomModal ref={this.modalRef}>
//                 <View style={{ flex: 1, justifyContent: 'flex-end' }}>
//                     <TouchableWithoutFeedback onPress={this._onCancel}>
//                         <View style={styles.container_modal} />
//                     </TouchableWithoutFeedback>

//                     <Animatable.View
//                         ref={this.bottomMenu as any}
//                         animation="slideInUp"
//                         duration={300}
//                         style={styles.container_modal_content}
//                     >
//                         <View style={styles.header}>
//                             <TouchableOpacity
//                                 onPress={this._onSubmit}
//                                 hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
//                             >
//                                 <View style={{ backgroundColor: color.WHITE }}>
//                                     <MavenProBold color={color.BLUE} fontSize={scale.w(16)}>
//                                         {'Done'}
//                                     </MavenProBold>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                         <Picker
//                             selectedValue={selectedValue > -1 ? selectedValue : 0}
//                             onValueChange={this._onValueChange}
//                             itemStyle={styles.picker_item}
//                             style={{ height: scale.w(250) }}
//                         >
//                             {values.map((item, index) => (
//                                 <Picker.Item key={item.value} label={item.label} value={index} />
//                             ))}
//                         </Picker>
//                     </Animatable.View>
//                 </View>
//             </CustomModal>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container_modal: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(52, 52, 52, 0.8)',
//     },
//     container_modal_content: {
//         minHeight: scale.w(250),
//         backgroundColor: color.WHITE,
//         paddingBottom: scale.w(20) + getBottom(),
//     },
//     header: {
//         padding: scale.w(15),
//         backgroundColor: '#fafaf8',
//         borderBottomColor: color.GREY_BG,
//         borderBottomWidth: 1,
//         alignItems: 'flex-end',
//     },
//     picker_item: {
//         fontFamily: 'MavenPro-Regular',
//         color: color.BLACK,
//         fontSize: scale.w(16),
//     },
// });

// export default PickerComboBox;
