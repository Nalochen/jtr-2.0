import {registerLocaleData} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient, provideHttpClient} from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import {GetTeamDetailsDataEffect, GetTeamOverviewDataEffect} from '@jtr/business-domain/team';
import {
  GetTournamentDetailsDataEffect,
  GetTournamentOverviewDataEffect,
} from '@jtr/business-domain/tournament';
import {GetUserDetailsDataEffect} from '@jtr/business-domain/user';

import { JwtInterceptor } from './business-rules/interceptors/jwt.interceptor';
import { metaReducers, reducers } from './business-rules/reducers';

import { appRoutes } from './app.routes';
import {HttpLoaderFactory} from './translate-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';


registerLocaleData(localeDe, 'de');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideStore(reducers, { metaReducers }),
    provideEffects([
      GetTeamDetailsDataEffect,
      GetTeamOverviewDataEffect,
      GetTournamentOverviewDataEffect,
      GetTournamentDetailsDataEffect,
      GetUserDetailsDataEffect,
    ]),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ...(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers || [])
  ],
};
