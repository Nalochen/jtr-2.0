import { createAction, props } from '@ngrx/store';
import { tournamentDetailsDataStoreSlice } from '../states/tournament-details-data-store.slice';

export const loadTournamentDetailsDataFailedAction = createAction(
  `[${tournamentDetailsDataStoreSlice}] Load Tariff Details Failure`,
  props<{ error: string }>()
);
