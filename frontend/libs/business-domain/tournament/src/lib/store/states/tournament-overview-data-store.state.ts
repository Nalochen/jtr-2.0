import { TournamentOverviewData } from '@jtr/data-domain/store';
import { LoadingState } from '../types/loading-state.type';

export interface TournamentOverviewDataState {
  tournamentOverview: TournamentOverviewData[];
  loadingState: LoadingState;
  error: string | null;
}
