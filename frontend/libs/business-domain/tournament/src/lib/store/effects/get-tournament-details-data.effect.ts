import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TournamentData, TournamentDataClient } from '@jtr/data-domain/store';
import { loadTournamentDetailsData } from '../actions/tournament-details-data-load.action';
import { loadTournamentDetailsDataFailedAction } from '../actions/tournament-details-data-loaded-failed.action';
import { loadTournamentDetailsDataSuccessAction } from '../actions/tournament-details-data-loaded-success.action';

@Injectable({
  providedIn: 'root',
})
export class GetTournamentDetailsDataEffect {
  private actions$ = inject(Actions);

  constructor(private tournamentDataClient: TournamentDataClient) {}

  public getTournamentDetailsData$: Observable<unknown> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTournamentDetailsData),
      switchMap((action) =>
        this.tournamentDataClient.getTournamentData$(action.tournamentId).pipe(
          map((payload: TournamentData) =>
            loadTournamentDetailsDataSuccessAction({
              tournamentDetails: payload,
            })
          ),
          catchError((error) =>
            of(loadTournamentDetailsDataFailedAction({ error }))
          )
        )
      )
    )
  );
}
