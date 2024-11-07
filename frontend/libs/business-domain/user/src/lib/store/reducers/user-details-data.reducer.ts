import { createReducer, on } from '@ngrx/store';

import { loadUserDetailsData } from '../actions/user-details-data-load.action';
import { loadUserDetailsDataFailedAction } from '../actions/user-details-data-loaded-failed.action';
import { loadUserDetailsDataSuccessAction } from '../actions/user-details-data-loaded-success.action';
import { userDetailsDataInitialState } from '../states/user-details-data-store.initial-state';
import { UserDetailsState } from '../states/user-details-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';

export const userDetailsDataReducer = createReducer(
  userDetailsDataInitialState,
  on(
    loadUserDetailsData,
    (state): UserDetailsState => ({
      ...state,
      loadingState: LOADING,
      error: null,
    })
  ),
  on(
    loadUserDetailsDataSuccessAction,
    (state, { userDetails }): UserDetailsState => ({
      ...state,
      loadingState: IDLE,
      userDetails: userDetails,
    })
  ),
  on(
    loadUserDetailsDataFailedAction,
    (state, { error }): UserDetailsState => ({
      ...state,
      loadingState: FAILED,
      error,
    })
  )
);
