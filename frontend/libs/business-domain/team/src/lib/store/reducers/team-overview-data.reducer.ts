import { createReducer, on } from '@ngrx/store';
import {
  loadTeamOverviewData,
  loadTeamOverviewDataFailedAction,
  loadTeamOverviewDataSuccessAction,
} from '../actions/team.action';
import { teamOverviewDataInitialState } from '../states/team-overview-data-store.initial-state';
import { TeamOverviewState } from '../states/team-overview-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';

export const teamOverviewDataReducer = createReducer(
  teamOverviewDataInitialState,
  on(
    loadTeamOverviewData,
    (state): TeamOverviewState => ({
      ...state,
      loadingState: LOADING,
      error: null,
    })
  ),
  on(
    loadTeamOverviewDataSuccessAction,
    (state, { teamOverview }): TeamOverviewState => ({
      ...state,
      loadingState: IDLE,
      teamOverview: teamOverview,
    })
  ),
  on(
    loadTeamOverviewDataFailedAction,
    (state, { error }): TeamOverviewState => ({
      ...state,
      loadingState: FAILED,
      error,
    })
  )
);
