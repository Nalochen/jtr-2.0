import { inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  UserOverviewData,
  UserOverviewDataClient,
} from '@jtr/data-domain/store';

import { loadUserOverviewData } from '../actions/user-overview-data-load.action';
import { loadUserOverviewDataFailedAction } from '../actions/user-overview-data-loaded-failed.action';
import { loadUserOverviewDataSuccessAction } from '../actions/user-overview-data-loaded-success.action';

@Injectable({
  providedIn: 'root',
})
export class GetUserOverviewDataEffect {
  private actions$ = inject(Actions);

  constructor(private userOverviewDataClient: UserOverviewDataClient) {}

  public getUserOverviewData$: Observable<unknown> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserOverviewData),
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
