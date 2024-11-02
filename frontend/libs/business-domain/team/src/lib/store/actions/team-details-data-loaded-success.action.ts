import { createAction, props } from '@ngrx/store';

import { TeamData } from '@jtr/data-domain/store';

import { teamDetailsDataStoreSlice } from '../states/team-details-data-store.slice';

export const loadTeamDetailsDataSuccessAction = createAction(
  `[${teamDetailsDataStoreSlice}]  Load Team Details Success`,
  props<{ teamDetails: TeamData }>()
);
