import { createAction, props } from '@ngrx/store';

import { userDetailsDataStoreSlice } from '../states/user-details-data-store.slice';

export const loadUserDetailsData = createAction(
  `[${userDetailsDataStoreSlice}] Load User Details`,
  props<{ userId: number | undefined }>()
);
