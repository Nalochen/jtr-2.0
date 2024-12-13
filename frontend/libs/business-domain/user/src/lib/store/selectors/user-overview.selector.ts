import { createFeatureSelector, createSelector } from '@ngrx/store';

import { userOverviewDataStoreSlice } from '../states/user-overview-data-store.slice';
import { UserOverviewState } from '../states/user-overview-data-store.state';

export const userOverviewStateSelector =
  createFeatureSelector<UserOverviewState>(userOverviewDataStoreSlice);

export const userOverviewSelector = createSelector(
  userOverviewStateSelector,
  (state: UserOverviewState) => state.userOverview
);
