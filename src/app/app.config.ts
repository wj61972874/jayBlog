import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import interceptors from '@app/services/interceptor';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { zh_CN, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CLIPBOARD_OPTIONS, ClipboardButtonComponent, MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown';

registerLocaleData(zh);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    ...interceptors,
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideClientHydration(),
    provideAngularSvgIcon(),
    provideNzI18n(zh_CN),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideMarkdown(
      {
        loader: HttpClient,
        clipboardOptions: {
          provide: MARKED_OPTIONS,
          useValue: {
            gfm: true,
            breaks: false,
            pedantic: false,
          },
        },
      }),
  ]
};
