import { IDLE } from '../types/loading-state.type';
import { TeamOverviewState } from './team-overview-data-store.state';

export const teamOverviewDataInitialState: TeamOverviewState = {
  teamOverview: [],
  loadingState: IDLE,
  error: null,
};
