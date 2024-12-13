import { createAction, props } from '@ngrx/store';

import { userOverviewDataStoreSlice } from '../states/user-overview-data-store.slice';

export const loadUserOverviewDataFailedAction = createAction(
  `[${userOverviewDataStoreSlice}] Load User Overview Failure`,
  props<{ error: string }>()
);
