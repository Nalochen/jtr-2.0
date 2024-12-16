import { Injectable } from '@angular/core';

import { firstValueFrom, Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import {
  loadTournamentDetailsData,
  tournamentDetailsNameSelector,
  tournamentDetailsSelector,
  tournamentDetailsTeamsSelector,
  tournamentOverviewSelector,
} from '@jtr/business-domain/tournament';
import {
  TournamentData,
  TournamentOverviewData,
  TournamentTeamsData,
} from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

@Injectable()
export class TournamentDataService {
  @SingletonGetter()
  public get tournamentOverview$(): Observable<TournamentOverviewData[]> {
    return this.store$.select(tournamentOverviewSelector);
  }

  @SingletonGetter()
  public get tournamentDetails$(): Observable<TournamentData | null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  @SingletonGetter()
  public get tournamentDetailsName$(): Observable<string | undefined> {
    return this.store$.select(tournamentDetailsNameSelector);
  }

  @SingletonGetter()
  public get tournamentDetailsTeams$(): Observable<
    TournamentTeamsData | undefined
  > {
    return this.store$.select(tournamentDetailsTeamsSelector);
  }

  public async reloadTournamentDetails(): Promise<void> {
    const tournamentId = (await firstValueFrom(this.tournamentDetails$))!.id;

    this.store$.dispatch(
      loadTournamentDetailsData({ tournamentId: tournamentId })
    );
  }

  constructor(private store$: Store) {}
}
