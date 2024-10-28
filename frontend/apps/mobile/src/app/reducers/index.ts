import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import {
  TOURNAMENT_DETAILS_DATA_REDUCER_SLICE,
  TOURNAMENT_OVERVIEW_DATA_REDUCER_SLICE,
  tournamentDetailsDataReducer,
  TournamentDetailsDataState,
  tournamentOverviewDataReducer,
  TournamentOverviewDataState,
} from '@jtr/business-domain/tournament';

export interface State {
  tournamentOverview: TournamentOverviewDataState;
  tournamentDetails: TournamentDetailsDataState;
}

export const reducers: ActionReducerMap<State> = {
  tournamentOverview: tournamentOverviewDataReducer,
  tournamentDetails: tournamentDetailsDataReducer,
};

export function localStorageSyncReducer(
  // eslint-disable-next-line
  reducer: ActionReducer<any>
  // eslint-disable-next-line
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      TOURNAMENT_OVERVIEW_DATA_REDUCER_SLICE,
      TOURNAMENT_DETAILS_DATA_REDUCER_SLICE,
    ],
    storage: localStorage,
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
