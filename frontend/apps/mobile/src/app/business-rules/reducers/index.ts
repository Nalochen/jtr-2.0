import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import {
  TEAM_DETAILS_DATA_REDUCER_SLICE,
  TEAM_OVERVIEW_DATA_REDUCER_SLICE,
  teamDetailsDataReducer,
  TeamDetailsState,
  teamOverviewDataReducer,
  TeamOverviewState,
} from '@jtr/business-domain/team';
import {
  TOURNAMENT_DETAILS_DATA_REDUCER_SLICE,
  TOURNAMENT_OVERVIEW_DATA_REDUCER_SLICE,
  tournamentDetailsDataReducer,
  TournamentDetailsState,
  tournamentOverviewDataReducer,
  TournamentOverviewState,
} from '@jtr/business-domain/tournament';
import {
  USER_DETAILS_DATA_REDUCER_SLICE,
  USER_OVERVIEW_DATA_REDUCER_SLICE,
  userDetailsDataReducer,
  UserDetailsState,
  userOverviewDataReducer,
  UserOverviewState,
} from '@jtr/business-domain/user';

export interface State {
  teamDetails: TeamDetailsState;
  teamOverview: TeamOverviewState;
  tournamentDetails: TournamentDetailsState;
  tournamentOverview: TournamentOverviewState;
  userDetails: UserDetailsState;
  userOverview: UserOverviewState;
}

export const reducers: ActionReducerMap<State> = {
  teamDetails: teamDetailsDataReducer,
  teamOverview: teamOverviewDataReducer,
  tournamentDetails: tournamentDetailsDataReducer,
  tournamentOverview: tournamentOverviewDataReducer,
  userDetails: userDetailsDataReducer,
  userOverview: userOverviewDataReducer,
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
      USER_DETAILS_DATA_REDUCER_SLICE,
      USER_OVERVIEW_DATA_REDUCER_SLICE,
    ],
    storage: localStorage,
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
