import { createAction } from '@ngrx/store';

import { teamOverviewDataStoreSlice } from '../states/team-overview-data-store.slice';

export const loadTeamOverviewData = createAction(
  `[${teamOverviewDataStoreSlice}] Load Teams Overview`
);
