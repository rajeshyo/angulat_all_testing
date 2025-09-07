import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  
    provideHttpClient(withInterceptors([ (req, next) => {
      // Call your AuthInterceptor logic
      // to check run in browser console localStorage.setItem('authToken', 'my test token 123');
      const token = localStorage.getItem('authToken');
      if (token) {
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
           headers: req.headers.set('Content-Type', 'application/json')
        .set('header2', 'header 2 value')
        .set('header3', 'header 3 value')
        });
      }
      return next(req);
    }]))
  ]
};
