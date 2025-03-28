import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyCDpZ7wYuMtchm9yBYLvZnI9YhyM1DvvAE',
  authDomain: 'notification-push-exampl-4a2e6.firebaseapp.com',
  projectId: 'notification-push-exampl-4a2e6',
  storageBucket: 'notification-push-exampl-4a2e6.firebasestorage.app',
  messagingSenderId: '524681137844',
  appId: '1:524681137844:web:599655fab359fedcda91e1',
  measurementId: 'G-N1XS2QFE76',
  // vapidKey:
  //   'BCcoZFuFFU3EzBs2CbpFrWU_TGR3Z57C4UyK6gC4F6ior2cqCS-KzVXkwf8ulbGeCLielRPk-RPzb9Rb7uIP7xY',
};

// Inicializa Firebase MANUALMENTE primero
initializeApp(firebaseConfig);
bootstrapApplication(AppComponent, appConfig).catch((err) => {
  console.error(err);
});
