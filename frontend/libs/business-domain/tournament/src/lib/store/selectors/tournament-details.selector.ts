import { createFeatureSelector, createSelector } from '@ngrx/store';

import { tournamentDetailsDataStoreSlice } from '../states/tournament-details-data-store.slice';
import { TournamentDetailsState } from '../states/tournament-details-data-store.state';

export const tournamentDetailsStateSelector =
  createFeatureSelector<TournamentDetailsState>(
    tournamentDetailsDataStoreSlice
  );

export const tournamentDetailsSelector = createSelector(
  tournamentDetailsStateSelector,
  (state: TournamentDetailsState) => state.tournamentDetails
);

export const tournamentDetailsNameSelector = createSelector(
  tournamentDetailsStateSelector,
  (state: TournamentDetailsState) => state.tournamentDetails?.name
);

export const tournamentDetailsRegistrationOpenAtSelector = createSelector(
  tournamentDetailsStateSelector,
  (state: TournamentDetailsState) => state.tournamentDetails?.registrationOpenAt
);

export const tournamentDetailsTeamsSelector = createSelector(
  tournamentDetailsStateSelector,
  (state: TournamentDetailsState) => state.tournamentDetails?.teams
);
