import { createAction, props } from '@ngrx/store';

import { UserOverviewData } from '@jtr/data-domain/store';

import { userOverviewDataStoreSlice } from '../states/user-overview-data-store.slice';

export const loadUserOverviewDataSuccessAction = createAction(
  `[${userOverviewDataStoreSlice}]  Load User Overview Success`,
  props<{ userOverview: UserOverviewData[] }>()
);
