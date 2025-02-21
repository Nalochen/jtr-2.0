import { createAction, props } from '@ngrx/store';

import { TournamentData } from '@jtr/data-domain/store';

import { tournamentDetailsDataStoreSlice } from '../states/tournament-details-data-store.slice';

enum TournamentDetailsActions {
  LoadTournamentDetails = `[${tournamentDetailsDataStoreSlice}] Load Tournament Details`,
  LoadTournamentDetailsFailed = `[${tournamentDetailsDataStoreSlice}] Load Tournament Details Failed`,
  LoadTournamentDetailsSuccess = `[${tournamentDetailsDataStoreSlice}] Load Tournament Details Success`,
}

export const loadTournamentDetailsDataAction = createAction(
  TournamentDetailsActions.LoadTournamentDetails,
  props<{ tournamentId: number }>()
);

export const loadTournamentDetailsDataSuccessAction = createAction(
  TournamentDetailsActions.LoadTournamentDetailsSuccess,
  props<{ tournamentDetails: TournamentData }>()
);

export const loadTournamentDetailsDataFailedAction = createAction(
  TournamentDetailsActions.LoadTournamentDetailsFailed,
  props<{ error: string }>()
);
