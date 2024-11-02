import { createFeatureSelector, createSelector } from '@ngrx/store';

import { teamDetailsDataStoreSlice } from '../states/team-details-data-store.slice';
import { TeamDetailsState } from '../states/team-details-data-store.state';

export const teamDetailsStateSelector =
  createFeatureSelector<TeamDetailsState>(
    teamDetailsDataStoreSlice
  );

export const teamDetailsSelector = createSelector(
  teamDetailsStateSelector,
  (state: TeamDetailsState) => state.teamDetails
);

export const teamDetailsNameSelector = createSelector(
  teamDetailsStateSelector,
  (state: TeamDetailsState) => state.teamDetails?.name
);
