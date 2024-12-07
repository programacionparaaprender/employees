import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { environment } from '../enviroments/enviroment.prod';
import { provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Para animaciones de toastr

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideToastr(), // Inicialización de toastr
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(FontAwesomeModule),
    provideFirebaseApp(() =>
      initializeApp(environment.firebaseConfig)
    ),
    /* provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider(
        'AIzaSyCjrfXzDQzmIeMW5ie-xmcHx6bGvF5wbF8'
      );
      return initializeAppCheck(undefined, {
        provider,
        isTokenAutoRefreshEnabled: true,
      });
    }), */
    provideFirestore(() => getFirestore()),
  ],
};
