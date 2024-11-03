import { TeamOverviewData } from '@jtr/data-domain/store';

import { LoadingState } from '../types/loading-state.type';

export interface TeamOverviewState {
  teamOverview: TeamOverviewData[];
  loadingState: LoadingState;
  error: string | null;
}
