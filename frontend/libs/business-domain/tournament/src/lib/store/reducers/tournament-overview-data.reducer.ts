import { createReducer, on } from '@ngrx/store';

import { loadTournamentOverviewData } from '../actions/tournament-overview-data-load.action';
import { loadTournamentOverviewDataFailedAction } from '../actions/tournament-overview-data-loaded-failed.action';
import { loadTournamentOverviewDataSuccessAction } from '../actions/tournament-overview-data-loaded-success.action';
import { tournamentOverviewDataInitialState } from '../states/tournament-overview-data-store.initial-state';
import { TournamentOverviewDataState } from '../states/tournament-overview-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';

export const tournamentOverviewDataReducer = createReducer(
  tournamentOverviewDataInitialState,
  on(
    loadTournamentOverviewData,
    (state): TournamentOverviewDataState => ({
      ...state,
      loadingState: LOADING,
      error: null,
    })
  ),
  on(
    loadTournamentOverviewDataSuccessAction,
    (state, { tournamentOverview }): TournamentOverviewDataState => ({
      ...state,
      loadingState: IDLE,
      tournamentOverview: tournamentOverview,
    })
  ),
  on(
    loadTournamentOverviewDataFailedAction,
    (state, { error }): TournamentOverviewDataState => ({
      ...state,
      loadingState: FAILED,
      error,
    })
  )
);
