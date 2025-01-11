import { createFeatureSelector, createSelector } from '@ngrx/store';

import { userDetailsDataStoreSlice } from '../states/user-details-data-store.slice';
import { UserDetailsState } from '../states/user-details-data-store.state';

export const userDetailsStateSelector = createFeatureSelector<UserDetailsState>(
  userDetailsDataStoreSlice
);

export const userDetailsSelector = createSelector(
  userDetailsStateSelector,
  (state: UserDetailsState) => state.userDetails
);

export const userDetailsIdSelector = createSelector(
  userDetailsStateSelector,
  (state: UserDetailsState) => state.userDetails?.id
);

export const userDetailsNameSelector = createSelector(
  userDetailsStateSelector,
  (state: UserDetailsState) => state.userDetails?.name
);

export const userDetailsPictureSelector = createSelector(
  userDetailsStateSelector,
  (state: UserDetailsState) => state.userDetails?.picture
);

export const userDetailsPictureUrlSelector = createSelector(
  userDetailsStateSelector,
  (state: UserDetailsState) =>
    state.userDetails?.picture
      ? `https://cdn.${window.location.host}/assets/user-pictures/${state.userDetails?.picture}`
      : ''
);
