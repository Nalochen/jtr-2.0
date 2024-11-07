import { createAction, props } from '@ngrx/store';

import { userDetailsDataStoreSlice } from '../states/user-details-data-store.slice';

export const loadUserDetailsDataFailedAction = createAction(
  `[${userDetailsDataStoreSlice}] Load User Details Failure`,
  props<{ error: string }>()
);
