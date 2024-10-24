import { TournamentDetailsDataState } from './tournament-details-data-store.state';
import { IDLE } from '../types/loading-state.type';

export const tournamentDetailsDataInitialState: TournamentDetailsDataState = {
  tournamentDetails: null,
  loadingState: IDLE,
  error: null,
};
