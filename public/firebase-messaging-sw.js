 'use strict';

importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js');

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: NEXT_PUBLIC_APIKEY,
        authDomain: NEXT_PUBLIC_AUTHDOMAIN,
        projectId: NEXT_PUBLIC_PROJECT_ID,
        storageBucket: NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
        messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
        appId: NEXT_PUBLIC_FIREBASE_APPID,
        measurementId: NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
    });
}

firebase.messaging();

firebase.messaging().onBackgroundMessage(async (message) => {
    if (Notification.permission === 'granted') {
        if (navigator.serviceWorker) {
            navigator.serviceWorker
                .getRegistration()
                .then(async function (reg) {
                    if (req) {
                        await reg.showNotification(message.notification.title, {
                            body: message.notification.body,
														icon: message.notification.icon
                        });
                    }
                });
        }
    }
});
