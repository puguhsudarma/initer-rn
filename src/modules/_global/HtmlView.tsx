// import React, { useCallback } from 'react';
// import RNHtmlView, { HTMLViewNode } from 'react-native-htmlview';
// import { StyleSheet, Text } from 'react-native';

// interface IHtmlViewProps {
//     value?: string | null;
// }

// const HtmlView = (props: IHtmlViewProps) => {
//     const renderNode = useCallback(
//         (
//             node: HTMLViewNode,
//             index: number,
//             siblings: HTMLViewNode,
//             parent: HTMLViewNode,
//             defaultRenderer: (node: HTMLViewNode, parent: HTMLViewNode) => React.ReactNode,
//         ) => {
//             // for text align center and right
//             if (
//                 node.name === 'p' &&
//                 (node.attribs.style === 'text-align: center;' || node.attribs.style === 'text-align: right;')
//             ) {
//                 return (
//                     <Text
//                         key={index}
//                         style={{
//                             fontFamily: 'MavenPro-Regular',
//                             fontSize: 16,
//                             textAlign: node.attribs.style === 'text-align: center;' ? 'center' : 'right',
//                         }}
//                     >
//                         {defaultRenderer((node as any).children, parent)}
//                     </Text>
//                 );
//             }

//             // for text bold
//             if (node.name === 'span' && node.attribs.style === 'font-weight: bolder;') {
//                 return (
//                     <Text
//                         key={index}
//                         style={{ fontFamily: 'MavenPro-Bold', fontWeight: 'bold', fontSize: 16 }}
//                     >
//                         {defaultRenderer((node as any).children, parent)}
//                     </Text>
//                 );
//             }

//             // for text supperscript and subscript
//             if (node.name === 'sup' || node.name === 'sub') {
//                 return (
//                     <Text key={index} style={{ fontFamily: 'MavenPro-Regular', fontSize: 8 }}>
//                         {defaultRenderer((node as any).children, parent)}
//                     </Text>
//                 );
//             }
//         },
//         [],
//     );

//     // casting
//     let value = '-';
//     if (props.value) {
//         const foundP = props.value.match(/\<p\>/gi);
//         value = foundP ? props.value : `<p>${props.value}</p>`;
//     }

//     return <RNHtmlView value={value} stylesheet={htmlStyleSheet} renderNode={renderNode} />;
// };

// const htmlStyleSheet = StyleSheet.create({
//     p: {
//         fontFamily: 'MavenPro-Regular',
//         color: '#000',
//         fontSize: 16,
//         lineHeight: 20,
//     },
//     b: {
//         fontFamily: 'MavenPro-Bold',
//         color: '#000',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     u: {
//         fontFamily: 'MavenPro-Regular',
//         color: '#000',
//         fontSize: 16,
//         textDecorationLine: 'underline',
//     },
//     i: {
//         color: '#000',
//         fontSize: 16,
//     },
//     li: {
//         fontFamily: 'MavenPro-Regular',
//         color: '#000',
//         fontSize: 16,
//     },
// });

// export default HtmlView;
