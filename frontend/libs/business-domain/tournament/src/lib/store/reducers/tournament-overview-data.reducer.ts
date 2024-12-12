import { createReducer, on } from '@ngrx/store';

import { tournamentOverviewDataInitialState } from '../states/tournament-overview-data-store.initial-state';
import { TournamentOverviewState } from '../states/tournament-overview-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';
import {
  loadTournamentOverviewData,
  loadTournamentOverviewDataFailedAction,
  loadTournamentOverviewDataSuccessAction
} from '../actions/tournament.action';

export const tournamentOverviewDataReducer = createReducer(
  tournamentOverviewDataInitialState,
  on(
    loadTournamentOverviewData,
    (state): TournamentOverviewState => ({
      ...state,
      loadingState: LOADING,
      error: null,
    })
  ),
  on(
    loadTournamentOverviewDataSuccessAction,
    (state, { tournamentOverview }): TournamentOverviewState => ({
      ...state,
      loadingState: IDLE,
      tournamentOverview: tournamentOverview,
    })
  ),
  on(
    loadTournamentOverviewDataFailedAction,
    (state, { error }): TournamentOverviewState => ({
      ...state,
      loadingState: FAILED,
      error,
    })
  )
);
