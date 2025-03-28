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
          vapidKey:
            'BCcoZFuFFU3EzBs2CbpFrWU_TGR3Z57C4UyK6gC4F6ior2cqCS-KzVXkwf8ulbGeCLielRPk-RPzb9Rb7uIP7xY',
        })
          .then((token) => {
            console.log('Token FCM:', token);
            // Envía el token al backend
            // fetch('http://localhost:3000/send-notification', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ token }),
            // });
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
