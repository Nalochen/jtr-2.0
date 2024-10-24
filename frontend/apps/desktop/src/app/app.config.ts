import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import {
  GetTournamentDetailsDataEffect,
  GetTournamentOverviewDataEffect,
} from '@jtr/business-domain/tournament';
import { provideHttpClient } from '@angular/common/http';

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
