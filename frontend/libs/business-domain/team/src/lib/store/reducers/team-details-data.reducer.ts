import { createReducer, on } from '@ngrx/store';

import {
  loadTeamDetailsData,
  loadTeamDetailsDataFailedAction,
  loadTeamDetailsDataSuccessAction,
} from '../actions/team.action';
import { teamDetailsDataInitialState } from '../states/team-details-data-store.initial-state';
import { TeamDetailsState } from '../states/team-details-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';

export const teamDetailsDataReducer = createReducer(
  teamDetailsDataInitialState,
  on(
    loadTeamDetailsData,
    (state): TeamDetailsState => ({
      ...state,
      loadingState: LOADING,
      error: null,
    })
  ),
  on(
    loadTeamDetailsDataSuccessAction,
    (state, { teamDetails }): TeamDetailsState => ({
      ...state,
      loadingState: IDLE,
      teamDetails: teamDetails,
    })
  ),
  on(
    loadTeamDetailsDataFailedAction,
    (state, { error }): TeamDetailsState => ({
      ...state,
      loadingState: FAILED,
      error,
    })
  )
);
