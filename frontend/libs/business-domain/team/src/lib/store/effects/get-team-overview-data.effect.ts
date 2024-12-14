import { inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  TeamOverviewData,
  TeamOverviewDataClient,
} from '@jtr/data-domain/store';

import {
  loadTeamOverviewData,
  loadTeamOverviewDataFailedAction,
  loadTeamOverviewDataSuccessAction,
} from '../actions/team.action';

@Injectable({
  providedIn: 'root',
})
export class GetTeamOverviewDataEffect {
  private actions$ = inject(Actions);

  constructor(private teamOverviewDataClient: TeamOverviewDataClient) {}

  public getTeamOverviewData$: Observable<unknown> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTeamOverviewData),
      switchMap(() =>
        this.teamOverviewDataClient.getTeamOverviewData$().pipe(
          map((payload: TeamOverviewData[]) =>
            loadTeamOverviewDataSuccessAction({
              teamOverview: payload,
            })
          ),
          catchError((error) => of(loadTeamOverviewDataFailedAction({ error })))
        )
      )
    )
  );
}
