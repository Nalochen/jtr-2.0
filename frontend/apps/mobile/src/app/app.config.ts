import {registerLocaleData} from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import {GetTeamDetailsDataEffect, GetTeamOverviewDataEffect} from '@jtr/business-domain/team';
import {
  GetTournamentDetailsDataEffect,
  GetTournamentOverviewDataEffect,
} from '@jtr/business-domain/tournament';

import { appRoutes } from './app.routes';
import { metaReducers, reducers } from './reducers';


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
    ]),
    provideHttpClient(),
  ],
};
