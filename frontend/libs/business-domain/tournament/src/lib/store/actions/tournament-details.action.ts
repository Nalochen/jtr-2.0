import { createAction, props } from '@ngrx/store';

import { tournamentDetailsDataStoreSlice } from '../states/tournament-details-data-store.slice';
import { TournamentData } from '@jtr/data-domain/store';

enum TournamentDetailsActions {
  LoadTournamentDetails = '[Tournament Details Data Store] Load Tournament Details',
  LoadTournamentDetailsFailed = '[Tournament Details Data Store] Load Tournament Details Failed',
  LoadTournamentDetailsSuccess = '[Tournament Details Data Store] Load Tournament Details Success',
}

export const loadTournamentDetailsData = createAction(
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
