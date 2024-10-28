import { IDLE } from '../types/loading-state.type';
import { TournamentDetailsDataState } from './tournament-details-data-store.state';

export const tournamentDetailsDataInitialState: TournamentDetailsDataState = {
  tournamentDetails: null,
  loadingState: IDLE,
  error: null,
};
