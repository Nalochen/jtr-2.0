import { TournamentData } from '@jtr/data-domain/store';

import { LoadingState } from '../types/loading-state.type';

export interface TournamentDetailsState {
  tournamentDetails: TournamentData | null;
  loadingState: LoadingState;
  error: string | null;
}
