import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  TournamentOverviewData,
  TournamentOverviewDataClient,
} from '@jtr/data-domain/store';
import { loadTournamentOverviewData } from '../actions/tournament-overview-data-load.action';
import { loadTournamentOverviewDataFailedAction } from '../actions/tournament-overview-data-loaded-failed.action';
import { loadTournamentOverviewDataSuccessAction } from '../actions/tournament-overview-data-loaded-success.action';

@Injectable({
  providedIn: 'root',
})
export class GetTournamentOverviewDataEffect {
  private actions$ = inject(Actions);

  constructor(
    private tournamentOverviewDataClient: TournamentOverviewDataClient
  ) {}

  public getTournamentOverviewData$: Observable<unknown> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTournamentOverviewData),
      switchMap(() =>
        this.tournamentOverviewDataClient.getTournamentOverviewData$().pipe(
          map((payload: TournamentOverviewData[]) =>
            loadTournamentOverviewDataSuccessAction({
              tournamentOverview: payload,
            })
          ),
          catchError((error) =>
            of(loadTournamentOverviewDataFailedAction({ error }))
          )
        )
      )
    )
  );
}