import { createAction, props } from '@ngrx/store';

import { TournamentData } from '@jtr/data-domain/store';

import { tournamentDetailsDataStoreSlice } from '../states/tournament-details-data-store.slice';

export const loadTournamentDetailsDataSuccessAction = createAction(
  `[${tournamentDetailsDataStoreSlice}] Tournaments Data Loaded Success`,
  props<{ tournamentDetails: TournamentData }>()
);
