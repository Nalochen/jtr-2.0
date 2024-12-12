import { createAction, props } from '@ngrx/store';

import { TournamentData, TournamentOverviewData } from '@jtr/data-domain/store';

enum TournamentActions {
  LoadTournamentDetails = '[Tournament Details Data Store] Load Tournament Details',
  LoadTournamentDetailsFailed = '[Tournament Details Data Store] Load Tournament Details Failed',
  LoadTournamentDetailsSuccess = '[Tournament Details Data Store] Load Tournament Details Success',
  LoadTournamentOverviewData = 'LoadTournamentOverviewData',
  LoadTournamentOverviewDataSuccess = 'LoadTournamentOverviewDataSuccess',
  LoadTournamentOverviewDataFailed = 'LoadTournamentOverviewDataFailed'
}

export const loadTournamentDetailsData = createAction(
  TournamentActions.LoadTournamentDetails,
  props<{ tournamentId: number }>()
);

export const loadTournamentDetailsDataSuccessAction = createAction(
  TournamentActions.LoadTournamentDetailsSuccess,
  props<{ tournamentDetails: TournamentData }>()
);

export const loadTournamentDetailsDataFailedAction = createAction(
  TournamentActions.LoadTournamentDetailsFailed,
  props<{ error: string }>()
);

export const loadTournamentOverviewData = createAction(
  TournamentActions.LoadTournamentOverviewData
);

export const loadTournamentOverviewDataSuccessAction = createAction(
  TournamentActions.LoadTournamentOverviewDataSuccess,
  props<{ tournamentOverview: TournamentOverviewData[] }>()
);

export const loadTournamentOverviewDataFailedAction = createAction(
  TournamentActions.LoadTournamentOverviewDataFailed,
  props<{ error: string }>()
);

