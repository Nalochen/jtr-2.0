import { createReducer, on } from '@ngrx/store';

import {
  loadTournamentDetailsData,
  loadTournamentDetailsDataFailedAction,
  loadTournamentDetailsDataSuccessAction,
} from '../actions/tournament.action';
import { tournamentDetailsDataInitialState } from '../states/tournament-details-data-store.initial-state';
import { TournamentDetailsState } from '../states/tournament-details-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';

export const tournamentDetailsDataReducer = createReducer(
  tournamentDetailsDataInitialState,
  on(
    loadTournamentDetailsData,
    (state): TournamentDetailsState => ({
      ...state,
      loadingState: LOADING,
      error: null,
    })
  ),
  on(
    loadTournamentDetailsDataSuccessAction,
    (state, { tournamentDetails }): TournamentDetailsState => ({
      ...state,
      loadingState: IDLE,
      tournamentDetails: tournamentDetails,
    })
  ),
  on(
    loadTournamentDetailsDataFailedAction,
    (state, { error }): TournamentDetailsState => ({
      ...state,
      loadingState: FAILED,
      error,
    })
  )
);
