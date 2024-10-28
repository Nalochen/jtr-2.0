import { IDLE } from '../types/loading-state.type';
import { TournamentOverviewDataState } from './tournament-overview-data-store.state';

export const tournamentOverviewDataInitialState: TournamentOverviewDataState = {
  tournamentOverview: [],
  loadingState: IDLE,
  error: null,
};
