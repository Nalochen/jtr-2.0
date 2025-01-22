import { createAction, props } from '@ngrx/store';

import { TeamOverviewData } from '@jtr/data-domain/store';

import { teamOverviewDataStoreSlice } from '../states/team-overview-data-store.slice';

export enum TeamOverviewActions {
  LoadTeamOverview = `[${teamOverviewDataStoreSlice}] Load Team Overview`,
  LoadTeamOverviewSuccess = `[${teamOverviewDataStoreSlice}] Load Team Overview Success`,
  LoadTeamOverviewFailure = `[${teamOverviewDataStoreSlice}] Load Team Overview Failure`,
}

export const loadTeamOverviewData = createAction(
  TeamOverviewActions.LoadTeamOverview
);

export const loadTeamOverviewDataSuccessAction = createAction(
  TeamOverviewActions.LoadTeamOverviewSuccess,
  props<{ teamOverview: TeamOverviewData[] }>()
);

export const loadTeamOverviewDataFailedAction = createAction(
  TeamOverviewActions.LoadTeamOverviewFailure,
  props<{ error: string }>()
);
