import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { Observable } from 'rxjs';
import { TeamData, TeamOverviewData } from '@jtr/data-domain/store';
import { teamDetailsNameSelector, teamDetailsSelector, teamOverviewSelector } from '@jtr/business-domain/team';

@Injectable()
export class TeamDataService {
  @SingletonGetter()
  public get teams$(): Observable<TeamOverviewData[]> {
    return this.store$.select(teamOverviewSelector);
  }

  @SingletonGetter()
  public get team$(): Observable<TeamData | null> {
    return this.store$.select(teamDetailsSelector);
  }

  @SingletonGetter()
  public get teamName$(): Observable<string | undefined> {
    return this.store$.select(teamDetailsNameSelector);
  }

  constructor(private readonly store$: Store) {}
}
