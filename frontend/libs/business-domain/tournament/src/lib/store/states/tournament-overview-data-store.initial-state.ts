import { TournamentOverviewDataState } from './tournament-overview-data-store.state';
import { IDLE } from '../types/loading-state.type';

export const tournamentOverviewDataInitialState: TournamentOverviewDataState = {
  tournamentOverview: [],
  loadingState: IDLE,
  error: null,
};
