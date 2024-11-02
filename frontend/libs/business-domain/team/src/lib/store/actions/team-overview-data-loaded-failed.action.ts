import { createAction, props } from '@ngrx/store';

import { teamOverviewDataStoreSlice } from '../states/team-overview-data-store.slice';

export const loadTeamOverviewDataFailedAction = createAction(
  `[${teamOverviewDataStoreSlice}] Load Teams Overview Failure`,
  props<{ error: string }>()
);
