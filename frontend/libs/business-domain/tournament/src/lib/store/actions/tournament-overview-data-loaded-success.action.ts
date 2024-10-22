import { createAction, props } from '@ngrx/store';

import { tournamentOverviewDataStoreSlice } from '../states/tournament-overview-data-store.slice';
import { TournamentOverviewData } from '@jtr/data-domain/store';

export const loadTournamentOverviewDataSuccessAction = createAction(
  `[${tournamentOverviewDataStoreSlice}] Tournaments Data Loaded Success`,
  props<{ tournamentOverview: TournamentOverviewData[] }>()
);
