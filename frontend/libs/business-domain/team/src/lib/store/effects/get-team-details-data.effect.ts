import { inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {TeamData, TeamDataClient} from '@jtr/data-domain/store';

import {
  loadTeamDetailsData,
  loadTeamDetailsDataFailedAction,
  loadTeamDetailsDataSuccessAction
} from '../actions/team.action';

@Injectable({
  providedIn: 'root',
})
export class GetTeamDetailsDataEffect {
  private actions$ = inject(Actions);

  constructor(private teamDataClient: TeamDataClient) {}

  public getTeamDetailsData$: Observable<unknown> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTeamDetailsData),
      switchMap((action) =>
        this.teamDataClient.getTeamData$(action.teamId).pipe(
          map((payload: TeamData) =>
            loadTeamDetailsDataSuccessAction({
              teamDetails: payload,
            })
          ),
          catchError((error) =>
            of(loadTeamDetailsDataFailedAction({ error }))
          )
        )
      )
    )
  );
}
