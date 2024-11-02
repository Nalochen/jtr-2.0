import { IDLE } from '../types/loading-state.type';
import { TournamentOverviewState } from './tournament-overview-data-store.state';

export const tournamentOverviewDataInitialState: TournamentOverviewState = {
  tournamentOverview: [],
  loadingState: IDLE,
  error: null,
};
