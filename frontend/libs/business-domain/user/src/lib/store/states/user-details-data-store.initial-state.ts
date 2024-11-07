import { IDLE } from '../types/loading-state.type';
import { UserDetailsState } from './user-details-data-store.state';

export const userDetailsDataInitialState: UserDetailsState = {
  userDetails: null,
  loadingState: IDLE,
  error: null,
};
