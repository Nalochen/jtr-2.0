import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  GetTournamentDetailsDataEffect,
  GetTournamentOverviewDataEffect,
} from '@jtr/business-domain/tournament';
import { provideHttpClient } from '@angular/common/http';
import { metaReducers, reducers } from './reducers';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

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
