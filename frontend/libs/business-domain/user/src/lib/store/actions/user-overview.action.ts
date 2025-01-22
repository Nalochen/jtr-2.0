import { createAction, props } from '@ngrx/store';

import { UserOverviewData } from '@jtr/data-domain/store';

import { userOverviewDataStoreSlice } from '../states/user-overview-data-store.slice';

enum UserOverviewActions {
  LoadUserOverview = `[${userOverviewDataStoreSlice}] Load User Overview`,
  LoadUserOverviewFailed = `[${userOverviewDataStoreSlice}] Load User Overview Overview`,
  LoadUserOverviewSuccess = `[${userOverviewDataStoreSlice}] Load User Overview Overview`,
}

export const loadUserOverviewDataAction = createAction(
  UserOverviewActions.LoadUserOverview
);

export const loadUserOverviewDataSuccessAction = createAction(
  UserOverviewActions.LoadUserOverviewSuccess,
  props<{ userOverview: UserOverviewData[] }>()
);

export const loadUserOverviewDataFailedAction = createAction(
  UserOverviewActions.LoadUserOverviewFailed,
  props<{ error: string }>()
);
