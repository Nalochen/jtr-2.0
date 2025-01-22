import { createAction, props } from '@ngrx/store';

import { TeamData } from '@jtr/data-domain/store';

import { teamDetailsDataStoreSlice } from '../states/team-details-data-store.slice';

export enum TeamDetailsAction {
  LoadTeamDetails = `[${teamDetailsDataStoreSlice}] Load Team Details`,
  LoadTeamDetailsSuccess = `[${teamDetailsDataStoreSlice}] Load Team Details Success`,
  LoadTeamDetailsFailure = `[${teamDetailsDataStoreSlice}] Load Team Details Failure`,
}

export const loadTeamDetailsData = createAction(
  TeamDetailsAction.LoadTeamDetails,
  props<{ escapedName: string }>()
);

export const loadTeamDetailsDataSuccessAction = createAction(
  TeamDetailsAction.LoadTeamDetailsSuccess,
  props<{ teamDetails: TeamData }>()
);

export const loadTeamDetailsDataFailedAction = createAction(
  TeamDetailsAction.LoadTeamDetailsFailure,
  props<{ error: string }>()
);
