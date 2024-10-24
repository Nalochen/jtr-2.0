import { createAction, props } from '@ngrx/store';

import { tournamentDetailsDataStoreSlice } from '../states/tournament-details-data-store.slice';
import { TournamentData } from '@jtr/data-domain/store';

export const loadTournamentDetailsDataSuccessAction = createAction(
  `[${tournamentDetailsDataStoreSlice}] Tournaments Data Loaded Success`,
  props<{ tournamentDetails: TournamentData }>()
);
