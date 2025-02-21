import { inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  UserOverviewData,
  UserOverviewDataClient,
} from '@jtr/data-domain/store';

import {
  loadUserOverviewDataAction,
  loadUserOverviewDataFailedAction,
  loadUserOverviewDataSuccessAction,
} from '../actions/user-overview.action';

@Injectable({
  providedIn: 'root',
})
export class GetUserOverviewDataEffect {
  private actions$ = inject(Actions);

  constructor(private userOverviewDataClient: UserOverviewDataClient) {}

  public getUserOverviewData$: Observable<unknown> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserOverviewDataAction),
      switchMap(() =>
        this.userOverviewDataClient.getUserOverviewData$().pipe(
          map((payload: UserOverviewData[]) =>
            loadUserOverviewDataSuccessAction({
              userOverview: payload,
            })
          ),
          catchError((error) => of(loadUserOverviewDataFailedAction({ error })))
        )
      )
    )
  );
}
