import { Injectable } from '@angular/core';

import { firstValueFrom, Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import {
  loadTeamDetailsData,
  teamDetailsNameSelector,
  teamDetailsSelector,
  teamOverviewSelector,
} from '@jtr/business-domain/team';
import { TeamData, TeamOverviewData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

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

  public async reloadTeamDetails(): Promise<void> {
    const escapedName = (await firstValueFrom(this.team$))!.escapedName;

    this.store$.dispatch(loadTeamDetailsData({ escapedName: escapedName }));
  }

  constructor(private readonly store$: Store) {}
}
