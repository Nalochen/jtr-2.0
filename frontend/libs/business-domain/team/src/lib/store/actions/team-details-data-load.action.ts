import { createAction, props } from '@ngrx/store';

import { teamDetailsDataStoreSlice } from '../states/team-details-data-store.slice';

export const loadTeamDetailsData = createAction(
  `[${teamDetailsDataStoreSlice}] Load Team Details`,
  props<{ teamId: number }>()
);
