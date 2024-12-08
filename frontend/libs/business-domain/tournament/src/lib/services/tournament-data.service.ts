import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import {
  tournamentDetailsNameSelector,
  tournamentDetailsRegistrationOpenAtSelector,
  tournamentDetailsSelector, tournamentDetailsTeamsSelector, tournamentOverviewSelector
} from '@jtr/business-domain/tournament';
import { TournamentData, TournamentOverviewData, TournamentTeamsData } from '@jtr/data-domain/store';
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
  public get tournamentDetailsRegistrationOpenAt$(): Observable<string | undefined> {
    return this.store$.select(tournamentDetailsRegistrationOpenAtSelector);
  }

  @SingletonGetter()
  public get tournamentDetailsTeams$(): Observable<TournamentTeamsData | undefined> {
    return this.store$.select(tournamentDetailsTeamsSelector);
  }

  constructor(private store$: Store) {}
}
