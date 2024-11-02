import { IDLE } from '../types/loading-state.type';
import { TeamDetailsState } from './team-details-data-store.state';

export const teamDetailsDataInitialState: TeamDetailsState = {
  teamDetails: null,
  loadingState: IDLE,
  error: null,
};
