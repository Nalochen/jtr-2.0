import { TournamentOverviewData } from '@jtr/data-domain/store';

import { LoadingState } from '../types/loading-state.type';

export interface TournamentOverviewState {
  tournamentOverview: TournamentOverviewData[];
  loadingState: LoadingState;
  error: string | null;
}
