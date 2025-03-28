importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  // Tu configuración de Firebase aquí
  apiKey: "AIzaSyCDpZ7wYuMtchm9yBYLvZnI9YhyM1DvvAE",
  authDomain: "notification-push-exampl-4a2e6.firebaseapp.com",
  projectId: "notification-push-exampl-4a2e6",
  storageBucket: "notification-push-exampl-4a2e6.firebasestorage.app",
  messagingSenderId: "524681137844",
  appId: "1:524681137844:web:599655fab359fedcda91e1",
  measurementId: "G-N1XS2QFE76",
});

// Recupera la instancia de Firebase Messaging
const messaging = firebase.messaging();

// Manejador de clicks en la notificación
self.addEventListener("notificationclick", (event) => {
  console.log("notificationclick", event);
  event.notification.close(); // Cierra la notificación
  const urlToOpen = event.notification.data?.url || "/";
  console.log("URL a abrir:", urlToOpen);
  event.waitUntil(
    clients.openWindow(urlToOpen) // Abre la URL en una nueva ventana
  );
});

// Maneja mensajes en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log("onBackgroundMessage payload:", payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: "/assets/icons/icon-72x72.png",
    data: { url: payload.data.url || "/" },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
