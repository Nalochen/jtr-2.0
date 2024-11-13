import { createAction, props } from '@ngrx/store';

import { tournamentDetailsDataStoreSlice } from '../states/tournament-details-data-store.slice';

export const loadTournamentDetailsData = createAction(
  `[${tournamentDetailsDataStoreSlice}] Load Tournament Details`,
  props<{ tournamentId: number }>()
);
