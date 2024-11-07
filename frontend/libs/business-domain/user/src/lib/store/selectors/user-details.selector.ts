import { createFeatureSelector, createSelector } from '@ngrx/store';

import { userDetailsDataStoreSlice } from '../states/user-details-data-store.slice';
import { UserDetailsState } from '../states/user-details-data-store.state';

export const userDetailsStateSelector =
  createFeatureSelector<UserDetailsState>(
    userDetailsDataStoreSlice
  );

export const userDetailsSelector = createSelector(
  userDetailsStateSelector,
  (state: UserDetailsState) => state.userDetails
);

export const userDetailsNameSelector = createSelector(
  userDetailsStateSelector,
  (state: UserDetailsState) => state.userDetails?.name
);
