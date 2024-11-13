import { createFeatureSelector, createSelector } from '@ngrx/store';

import { tournamentOverviewDataStoreSlice } from '../states/tournament-overview-data-store.slice';
import { TournamentOverviewState } from '../states/tournament-overview-data-store.state';

export const tournamentOverviewStateSelector =
  createFeatureSelector<TournamentOverviewState>(
    tournamentOverviewDataStoreSlice
  );

export const tournamentOverviewSelector = createSelector(
  tournamentOverviewStateSelector,
  (state: TournamentOverviewState) => state.tournamentOverview
);
