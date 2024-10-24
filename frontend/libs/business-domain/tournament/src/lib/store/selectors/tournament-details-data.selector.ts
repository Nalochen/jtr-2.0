import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TournamentDetailsDataState } from '../states/tournament-details-data-store.state';
import { tournamentDetailsDataStoreSlice } from '../states/tournament-details-data-store.slice';

export const tournamentDetailsDataStateSelector =
  createFeatureSelector<TournamentDetailsDataState>(
    tournamentDetailsDataStoreSlice
  );

export const tournamentDetailsDataSelector = createSelector(
  tournamentDetailsDataStateSelector,
  (state: TournamentDetailsDataState) => state.tournamentDetails
);

export const tournamentNameDataSelector = createSelector(
  tournamentDetailsDataStateSelector,
  (state: TournamentDetailsDataState) => state.tournamentDetails?.name
);
