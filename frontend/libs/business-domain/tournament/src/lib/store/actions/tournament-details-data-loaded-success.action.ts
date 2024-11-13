import { createAction, props } from '@ngrx/store';

import { TournamentData } from '@jtr/data-domain/store';

import { tournamentDetailsDataStoreSlice } from '../states/tournament-details-data-store.slice';

export const loadTournamentDetailsDataSuccessAction = createAction(
  `[${tournamentDetailsDataStoreSlice}] Load Tournament Details Success`,
  props<{ tournamentDetails: TournamentData }>()
);
