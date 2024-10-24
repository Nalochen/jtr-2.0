import { TournamentData } from '@jtr/data-domain/store';
import { LoadingState } from '../types/loading-state.type';

export interface TournamentDetailsDataState {
  tournamentDetails: TournamentData | null;
  loadingState: LoadingState;
  error: string | null;
}
