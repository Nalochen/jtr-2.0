import { createAction, props } from '@ngrx/store';

import { UserData } from '@jtr/data-domain/store';

import { userDetailsDataStoreSlice } from '../states/user-details-data-store.slice';

export const loadUserDetailsDataSuccessAction = createAction(
  `[${userDetailsDataStoreSlice}]  Load User Details Success`,
  props<{ userDetails: UserData }>()
);
