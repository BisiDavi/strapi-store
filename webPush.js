import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';

const firebaseCloudMessage = {
    tokenInlocalforage: async () => {
        return localforage.getItem('fcm_token');
    },
    init: async function ({ options }) {
        if (!firebase.apps.length) {
            firebase.initializeApp(options);
            try {
                const messaging = firebase.messaging();
                const tokenInLocalForage = await this.tokenInlocalforage;

                if (tokenInLocalForage !== null) {
                    return tokenInLocalForage;
                }

                const status = await Notification.requestPermission();
                if (status && status === 'granted') {
                    const fcm_token = await messaging.getToken();
                    if (fcm_token) {
                        await localforage.setItem('fcm_token', fcm_token);
                        console.log('fcm_token', fcm_token);
                        return fcm_token;
                    }
                }
            } catch (error) {
                console.error(error);
                return null;
            }
        }
    },
};
export { firebaseCloudMessage };
