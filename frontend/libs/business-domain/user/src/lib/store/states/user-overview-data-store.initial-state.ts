import { IDLE } from '../types/loading-state.type';
import { UserOverviewState } from './user-overview-data-store.state';

export const userOverviewDataInitialState: UserOverviewState = {
  userOverview: [],
  loadingState: IDLE,
  error: null,
};
