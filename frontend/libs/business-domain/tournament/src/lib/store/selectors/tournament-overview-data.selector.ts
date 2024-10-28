import { createFeatureSelector, createSelector } from '@ngrx/store';

import { tournamentOverviewDataStoreSlice } from '../states/tournament-overview-data-store.slice';
import { TournamentOverviewDataState } from '../states/tournament-overview-data-store.state';

export const tournamentOverviewDataStateSelector =
  createFeatureSelector<TournamentOverviewDataState>(
    tournamentOverviewDataStoreSlice
  );

export const tournamentOverviewDataSelector = createSelector(
  tournamentOverviewDataStateSelector,
  (state: TournamentOverviewDataState) => state.tournamentOverview
);
