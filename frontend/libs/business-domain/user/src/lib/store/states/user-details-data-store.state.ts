import { UserData } from '@jtr/data-domain/store';

import { LoadingState } from '../types/loading-state.type';

export interface UserDetailsState {
  userDetails: UserData | null;
  loadingState: LoadingState;
  error: string | null;
}
