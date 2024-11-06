import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import {
  TEAM_DETAILS_DATA_REDUCER_SLICE, TEAM_OVERVIEW_DATA_REDUCER_SLICE,
  teamDetailsDataReducer,
  TeamDetailsState, teamOverviewDataReducer,
  TeamOverviewState
} from '@jtr/business-domain/team';
import {
  TOURNAMENT_DETAILS_DATA_REDUCER_SLICE,
  TOURNAMENT_OVERVIEW_DATA_REDUCER_SLICE,
  tournamentDetailsDataReducer,
  TournamentDetailsState,
  tournamentOverviewDataReducer,
  TournamentOverviewState,
} from '@jtr/business-domain/tournament';

export interface State {
  teamDetails: TeamDetailsState;
  teamOverview: TeamOverviewState;
  tournamentDetails: TournamentDetailsState;
  tournamentOverview: TournamentOverviewState;
}

export const reducers: ActionReducerMap<State> = {
  teamDetails: teamDetailsDataReducer,
  teamOverview: teamOverviewDataReducer,
  tournamentDetails: tournamentDetailsDataReducer,
  tournamentOverview: tournamentOverviewDataReducer,
};

export function localStorageSyncReducer(
  // eslint-disable-next-line
  reducer: ActionReducer<any>
  // eslint-disable-next-line
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      TEAM_DETAILS_DATA_REDUCER_SLICE,
      TEAM_OVERVIEW_DATA_REDUCER_SLICE,
      TOURNAMENT_DETAILS_DATA_REDUCER_SLICE,
      TOURNAMENT_OVERVIEW_DATA_REDUCER_SLICE,
    ],
    storage: localStorage,
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];