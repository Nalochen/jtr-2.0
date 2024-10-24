import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TournamentOverviewDataState } from '../states/tournament-overview-data-store.state';
import { tournamentOverviewDataStoreSlice } from '../states/tournament-overview-data-store.slice';

export const tournamentOverviewDataStateSelector =
  createFeatureSelector<TournamentOverviewDataState>(
    tournamentOverviewDataStoreSlice
  );

export const tournamentOverviewDataSelector = createSelector(
  tournamentOverviewDataStateSelector,
  (state: TournamentOverviewDataState) => state.tournamentOverview
);
