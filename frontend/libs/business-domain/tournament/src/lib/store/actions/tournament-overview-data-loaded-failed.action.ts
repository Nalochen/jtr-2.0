import { createAction, props } from '@ngrx/store';

import { tournamentOverviewDataStoreSlice } from '../states/tournament-overview-data-store.slice';

export const loadTournamentOverviewDataFailedAction = createAction(
  `[${tournamentOverviewDataStoreSlice}] Tournaments Data Loaded Failure`,
  props<{ error: string }>()
);
