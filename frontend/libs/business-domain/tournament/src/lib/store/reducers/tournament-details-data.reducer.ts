import { createReducer, on } from '@ngrx/store';

import {
  loadTournamentDetailsDataAction,
  loadTournamentDetailsDataFailedAction,
  loadTournamentDetailsDataSuccessAction,
} from '../actions/tournament-details.action';
import { tournamentDetailsDataInitialState } from '../states/tournament-details-data-store.initial-state';
import { TournamentDetailsState } from '../states/tournament-details-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';

export const tournamentDetailsDataReducer = createReducer(
  tournamentDetailsDataInitialState,
  on(
    loadTournamentDetailsDataAction,
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
