import { createAction } from '@ngrx/store';

import { tournamentOverviewDataStoreSlice } from '../states/tournament-overview-data-store.slice';

export const loadTournamentOverviewData = createAction(
  `[${tournamentOverviewDataStoreSlice}] Load Tournaments`
);
