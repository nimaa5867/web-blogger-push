importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCcy-LscSkLtF0A9cZfAw3RkhuMvwdR9z0",
  authDomain: "blogger-push-2600c.firebaseapp.com",
  projectId: "blogger-push-2600c",
  messagingSenderId: "123215748336",
  appId: "1:123215748336:web:b514311091defcdbfff635"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png' // ඔබේ Logo එකෙහි Link එක
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
