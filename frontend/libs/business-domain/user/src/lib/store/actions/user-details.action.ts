import { createAction, props } from '@ngrx/store';

import { UserData } from '@jtr/data-domain/store';

import { userDetailsDataStoreSlice } from '../states/user-details-data-store.slice';

enum UserDetailsActions {
  LoadUserDetails = `[${userDetailsDataStoreSlice}] Load User Details`,
  LoadUserDetailsFailed = `[${userDetailsDataStoreSlice}] Load User Details Failed`,
  LoadUserDetailsSuccess = `[${userDetailsDataStoreSlice}] Load User Details Success`,
}

export const loadUserDetailsDataAction = createAction(
  UserDetailsActions.LoadUserDetails,
  props<{ escapedUsername: string | undefined }>()
);

export const loadUserDetailsDataSuccessAction = createAction(
  UserDetailsActions.LoadUserDetailsSuccess,
  props<{ userDetails: UserData }>()
);

export const loadUserDetailsDataFailedAction = createAction(
  UserDetailsActions.LoadUserDetailsFailed,
  props<{ error: string }>()
);
