import { createReducer, on } from '@ngrx/store';

import {
  loadUserOverviewDataAction,
  loadUserOverviewDataFailedAction,
  loadUserOverviewDataSuccessAction,
} from '../actions/user-overview.action';
import { userOverviewDataInitialState } from '../states/user-overview-data-store.initial-state';
import { UserOverviewState } from '../states/user-overview-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';

export const userOverviewDataReducer = createReducer(
  userOverviewDataInitialState,
  on(
    loadUserOverviewDataAction,
    (state): UserOverviewState => ({
      ...state,
      loadingState: LOADING,
      error: null,
    })
  ),
  on(
    loadUserOverviewDataSuccessAction,
    (state, { userOverview }): UserOverviewState => ({
      ...state,
      loadingState: IDLE,
      userOverview: userOverview,
    })
  ),
  on(
    loadUserOverviewDataFailedAction,
    (state, { error }): UserOverviewState => ({
      ...state,
      loadingState: FAILED,
      error,
    })
  )
);
