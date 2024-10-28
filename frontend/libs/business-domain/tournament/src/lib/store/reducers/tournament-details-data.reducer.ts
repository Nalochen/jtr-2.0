import { createReducer, on } from '@ngrx/store';

import { loadTournamentDetailsData } from '../actions/tournament-details-data-load.action';
import { loadTournamentDetailsDataFailedAction } from '../actions/tournament-details-data-loaded-failed.action';
import { loadTournamentDetailsDataSuccessAction } from '../actions/tournament-details-data-loaded-success.action';
import { tournamentDetailsDataInitialState } from '../states/tournament-details-data-store.initial-state';
import { TournamentDetailsDataState } from '../states/tournament-details-data-store.state';
import { FAILED, IDLE, LOADING } from '../types/loading-state.type';

export const tournamentDetailsDataReducer = createReducer(
  tournamentDetailsDataInitialState,
  on(
    loadTournamentDetailsData,
    (state): TournamentDetailsDataState => ({
      ...state,
      loadingState: LOADING,
      error: null,
    })
  ),
  on(
    loadTournamentDetailsDataSuccessAction,
    (state, { tournamentDetails }): TournamentDetailsDataState => ({
      ...state,
      loadingState: IDLE,
      tournamentDetails: tournamentDetails,
    })
  ),
  on(
    loadTournamentDetailsDataFailedAction,
    (state, { error }): TournamentDetailsDataState => ({
      ...state,
      loadingState: FAILED,
      error,
    })
  )
);
