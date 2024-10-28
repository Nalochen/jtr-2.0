import { createAction, props } from '@ngrx/store';

import { TournamentOverviewData } from '@jtr/data-domain/store';

import { tournamentOverviewDataStoreSlice } from '../states/tournament-overview-data-store.slice';

export const loadTournamentOverviewDataSuccessAction = createAction(
  `[${tournamentOverviewDataStoreSlice}] Tournaments Data Loaded Success`,
  props<{ tournamentOverview: TournamentOverviewData[] }>()
);
