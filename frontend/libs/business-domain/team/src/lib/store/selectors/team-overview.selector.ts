import { createFeatureSelector, createSelector } from '@ngrx/store';

import { teamOverviewDataStoreSlice } from '../states/team-overview-data-store.slice';
import { TeamOverviewState } from '../states/team-overview-data-store.state';

export const teamOverviewStateSelector =
  createFeatureSelector<TeamOverviewState>(
    teamOverviewDataStoreSlice
  );

export const teamOverviewSelector = createSelector(
  teamOverviewStateSelector,
  (state: TeamOverviewState) => state.teamOverview
);
