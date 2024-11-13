import { createAction, props } from '@ngrx/store';

import { teamDetailsDataStoreSlice } from '../states/team-details-data-store.slice';

export const loadTeamDetailsDataFailedAction = createAction(
  `[${teamDetailsDataStoreSlice}] Load Team Details Failure`,
  props<{ error: string }>()
);
