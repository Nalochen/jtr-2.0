import { SingletonGetter } from '@jtr/infrastructure/cache';
import { Observable } from 'rxjs';
import { TournamentData, TournamentOverviewData, TournamentTeamsData } from '@jtr/data-domain/store';
import {
  tournamentDetailsNameSelector,
  tournamentDetailsRegistrationOpenAtSelector,
  tournamentDetailsSelector, tournamentDetailsTeamsSelector, tournamentOverviewSelector, tournamentOverviewStateSelector
} from '@jtr/business-domain/tournament';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

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
