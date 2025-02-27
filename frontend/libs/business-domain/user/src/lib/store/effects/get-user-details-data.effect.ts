import { inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { UserData, UserDataClient } from '@jtr/data-domain/store';

import {
  loadUserDetailsDataAction,
  loadUserDetailsDataFailedAction,
  loadUserDetailsDataSuccessAction,
} from '../actions/user-details.action';

@Injectable({
  providedIn: 'root',
})
export class GetUserDetailsDataEffect {
  private actions$ = inject(Actions);

  constructor(private userDataClient: UserDataClient) {}

  public getUserDetailsData$: Observable<unknown> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserDetailsDataAction),
      switchMap((action) =>
        this.userDataClient.getUserData$(action.escapedUsername).pipe(
          map((payload: UserData) =>
            loadUserDetailsDataSuccessAction({
              userDetails: payload,
            })
          ),
          catchError((error) => of(loadUserDetailsDataFailedAction({ error })))
        )
      )
    )
  );
}
