import { createAction, props } from '@ngrx/store';

import { TeamOverviewData } from '@jtr/data-domain/store';

import { teamOverviewDataStoreSlice } from '../states/team-overview-data-store.slice';

export const loadTeamOverviewDataSuccessAction = createAction(
  `[${teamOverviewDataStoreSlice}] Load Teams Overview Success`,
  props<{ teamOverview: TeamOverviewData[] }>()
);
