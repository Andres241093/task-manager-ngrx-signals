import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  getMessaging,
  getToken,
  Messaging,
  onMessage,
} from '@angular/fire/messaging';
import { environment } from '../environments/environment';
import { getApps } from 'firebase/app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private messaging: Messaging = getMessaging();

  constructor(private router: Router) {
    // Verifica si hay una URL en el estado de la aplicación
    const url = window.location.pathname;
    console.log(url);
    if (url !== '/') {
      this.router.navigateByUrl(url);
    }
  }

  ngOnInit(): void {
    this.requestPermission();
    // this.listenForMessages();
  }

  requestPermission(): void {
    Notification.requestPermission().then((permission) => {
      console.log(permission);
      if (permission === 'granted' && this.messaging) {
        console.log('Permiso concedido para notificaciones.');
        getToken(this.messaging, {
          vapidKey: environment.vapidKey,
        })
          .then((token) => {
            console.log('Token FCM:', token);
            // store token in backend
          })
          .catch((err) => console.error('Error al obtener el token:', err));
      } else {
        console.warn('Permiso denegado para notificaciones.');
      }
    });
  }

  // listenForMessages(): void {
  //   console.log('listenForMessages', this.messaging);
  //   onMessage(this.messaging, (payload) => {
  //     console.log('Mensaje recibido en listenForMessages:', payload);
  //   });
  // }
}
