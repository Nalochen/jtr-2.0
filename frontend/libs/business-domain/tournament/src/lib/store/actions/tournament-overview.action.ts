import { createAction, props } from '@ngrx/store';

import { TournamentOverviewData } from '@jtr/data-domain/store';

import { tournamentOverviewDataStoreSlice } from '../states/tournament-overview-data-store.slice';

enum TournamentOverviewActions {
  LoadTournamentOverview = `[${tournamentOverviewDataStoreSlice}] Load Tournament Overview`,
  LoadTournamentOverviewSuccess = `[${tournamentOverviewDataStoreSlice}] Load Tournament Overview Success`,
  LoadTournamentOverviewFailed = `[${tournamentOverviewDataStoreSlice}] Load Tournament Overview Failed`,
}

export const loadTournamentOverviewDataAction = createAction(
  TournamentOverviewActions.LoadTournamentOverview
);

export const loadTournamentOverviewDataSuccessAction = createAction(
  TournamentOverviewActions.LoadTournamentOverviewSuccess,
  props<{ tournamentOverview: TournamentOverviewData[] }>()
);

export const loadTournamentOverviewDataFailedAction = createAction(
  TournamentOverviewActions.LoadTournamentOverviewFailed,
  props<{ error: string }>()
);
