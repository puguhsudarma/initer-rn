// import firebase from 'react-native-firebase';

// export const getDeviceToken = async () => {
//     try {
//         // check permission push notif
//         const enabled = await firebase.messaging().hasPermission();

//         // user doesn't have permission
//         if (!enabled) {
//             await firebase.messaging().requestPermission();
//         }

//         // get token
//         return await firebase.messaging().getToken();
//     } catch (error) {
//         if (__DEV__) {
//             console.log('PERMISSION_NOTIF: ', { error });
//         }

//         throw error;
//     }
// };

// export const listenFCMTokenRefresh = (onfcmToken: (fcmToken: string) => void) =>
//     firebase.messaging().onTokenRefresh((fcmToken) => {
//         if (fcmToken) {
//             if (__DEV__) {
//                 console.log('FCM_REFRESH_TOKEN: ', fcmToken);
//             }

//             onfcmToken(fcmToken);
//         }
//     });

// /**
//  * Register channel notification for android 8.0
//  * @param none
//  * @return promise<void>
//  */
// export const registerChannelNotification = () => {
//     // Build a channel
//     const channel = new firebase.notifications.Android.Channel(
//         'lite',
//         'LITE',
//         firebase.notifications.Android.Importance.Max,
//     ).setDescription('LITE Channel Notification');

//     // Create the channel
//     return firebase.notifications().android.createChannel(channel);
// };

// export interface IPayloadNotif {
//     object_id: number | string;
//     notification_id: string;
//     type: 'driver';
//     object: 'booking_item' | 'chat_room';
// }

// export const notificationForeground = (
//     onNotifPayload?: (title: string, body: string, payload: IPayloadNotif) => void,
//     onNotifUnpayload?: (title: string, body: string) => void,
// ) =>
//     firebase.notifications().onNotification((notification) => {
//         if (__DEV__) {
//             console.log('FOREGROUND_NOTIFICATION: ', notification);
//         }

//         const { title, body, data } = notification;
//         const payload: IPayloadNotif | null = data.payload ? JSON.parse(data.payload) : null;

//         if (payload && payload.type) {
//             if (onNotifPayload) {
//                 onNotifPayload(title, body, payload);
//             }

//             return 0;
//         }

//         if (onNotifUnpayload) {
//             onNotifUnpayload(title, body);
//         }

//         return 0;
//     });

// export const notificationBackground = (onNotifPayload?: (payload: IPayloadNotif) => void) =>
//     firebase.notifications().onNotificationOpened((notificationOpen) => {
//         if (__DEV__) {
//             console.log('BACKGROUND_KILLED_NOTIFICATION', notificationOpen);
//         }

//         const payload: IPayloadNotif | null = notificationOpen.notification.data.payload
//             ? JSON.parse(notificationOpen.notification.data.payload)
//             : null;

//         if (payload && payload.type && onNotifPayload) {
//             onNotifPayload(payload);
//         }
//     });

// export const getInitialNotification = (onNotifPayload?: (payload: IPayloadNotif) => void) => {
//     firebase
//         .notifications()
//         .getInitialNotification()
//         .then((notification) => {
//             if (__DEV__) {
//                 console.log('BACKGROUND_KILLED_NOTIFICATION: ', notification);
//             }

//             // no notification
//             if (!notification) {
//                 return 0;
//             }

//             const payload: IPayloadNotif | null = notification.notification.data.payload
//                 ? JSON.parse(notification.notification.data.payload)
//                 : null;

//             if (payload && onNotifPayload) {
//                 onNotifPayload(payload);
//             }
//         })
//         .catch((error) => {
//             if (__DEV__) {
//                 console.log('BACKGROUND_KILLED_NOTIFICATION: ', error);
//             }
//         });
// };
