import { IDLE } from '../types/loading-state.type';
import { TournamentDetailsState } from './tournament-details-data-store.state';

export const tournamentDetailsDataInitialState: TournamentDetailsState = {
  tournamentDetails: null,
  loadingState: IDLE,
  error: null,
};
