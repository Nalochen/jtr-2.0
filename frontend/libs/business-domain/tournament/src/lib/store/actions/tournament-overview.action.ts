import { createAction, props } from '@ngrx/store';

import { tournamentOverviewDataStoreSlice } from '../states/tournament-overview-data-store.slice';
import { TournamentOverviewData } from '@jtr/data-domain/store';

enum TournamentOverviewActions {
  LoadTournamentOverviewData = 'LoadTournamentOverviewData',
  LoadTournamentOverviewDataSuccess = 'LoadTournamentOverviewDataSuccess',
  LoadTournamentOverviewDataFailed = 'LoadTournamentOverviewDataFailed'
}

export const loadTournamentOverviewData = createAction(
  TournamentOverviewActions.LoadTournamentOverviewData
);

export const loadTournamentOverviewDataSuccessAction = createAction(
  TournamentOverviewActions.LoadTournamentOverviewDataSuccess,
  props<{ tournamentOverview: TournamentOverviewData[] }>()
);

export const loadTournamentOverviewDataFailedAction = createAction(
  TournamentOverviewActions.LoadTournamentOverviewDataFailed,
  props<{ error: string }>()
);
