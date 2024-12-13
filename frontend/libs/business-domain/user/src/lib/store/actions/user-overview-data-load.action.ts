import { createAction } from '@ngrx/store';

import { userOverviewDataStoreSlice } from '../states/user-overview-data-store.slice';

export const loadUserOverviewData = createAction(
  `[${userOverviewDataStoreSlice}] Load User Overview`
);
