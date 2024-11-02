import { TeamData } from '@jtr/data-domain/store';

import { LoadingState } from '../types/loading-state.type';

export interface TeamDetailsState {
  teamDetails: TeamData | null;
  loadingState: LoadingState;
  error: string | null;
}
