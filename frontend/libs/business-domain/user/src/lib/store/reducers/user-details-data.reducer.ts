import { createReducer, on } from '@ngrx/store';

import {
  loadUserDetailsDataAction,
  loadUserDetailsDataFailedAction,
  loadUserDetailsDataSuccessAction,
} from '../actions/user-details.action';
import { userDetailsDataInitialState } from '../states/user-details-data-store.initial-state';
import { UserDetailsState } from '../states/user-details-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';

export const userDetailsDataReducer = createReducer(
  userDetailsDataInitialState,
  on(
    loadUserDetailsDataAction,
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
