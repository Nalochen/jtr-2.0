import { createAction, props } from '@ngrx/store';

import { teamDetailsDataStoreSlice } from '../states/team-details-data-store.slice';
import { TeamData, TeamOverviewData } from '@jtr/data-domain/store';
import { teamOverviewDataStoreSlice } from '../states/team-overview-data-store.slice';

export enum TeamActionTypes {
  LoadTeamOverview = '[Team] Load Team Overview',
  LoadTeamOverviewSuccess = '[Team] Load Team Overview Success',
  LoadTeamOverviewFailure = '[Team] Load Team Overview Failure',
  LoadTeamDetails = '[Team] Load Team Details',
  LoadTeamDetailsSuccess = '[Team] Load Team Details Success',
  LoadTeamDetailsFailure = '[Team] Load Team Details Failure'
}

export const loadTeamOverviewData = createAction(
  TeamActionTypes.LoadTeamOverview
);

export const loadTeamOverviewDataSuccessAction = createAction(
  TeamActionTypes.LoadTeamOverviewSuccess,
  props<{ teamOverview: TeamOverviewData[] }>()
);

export const loadTeamOverviewDataFailedAction = createAction(
  TeamActionTypes.LoadTeamOverviewFailure,
  props<{ error: string }>()
);


export const loadTeamDetailsData = createAction(
  TeamActionTypes.LoadTeamDetails,
  props<{ teamId: number }>()
);

export const loadTeamDetailsDataSuccessAction = createAction(
  TeamActionTypes.LoadTeamDetailsSuccess,
  props<{ teamDetails: TeamData }>()
);


export const loadTeamDetailsDataFailedAction = createAction(
  TeamActionTypes.LoadTeamDetailsFailure,
  props<{ error: string }>()
);
