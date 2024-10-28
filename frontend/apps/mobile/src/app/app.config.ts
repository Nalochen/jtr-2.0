import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import {
  GetTournamentDetailsDataEffect,
  GetTournamentOverviewDataEffect,
} from '@jtr/business-domain/tournament';

import { appRoutes } from './app.routes';
import { metaReducers, reducers } from './reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideStore(reducers, { metaReducers }),
    provideEffects([
      GetTournamentOverviewDataEffect,
      GetTournamentDetailsDataEffect,
    ]),
    provideHttpClient(),
  ],
};
