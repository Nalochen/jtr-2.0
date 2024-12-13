import { UserOverviewData } from '@jtr/data-domain/store';

import { LoadingState } from '../types/loading-state.type';

export interface UserOverviewState {
  userOverview: UserOverviewData[];
  loadingState: LoadingState;
  error: string | null;
}
