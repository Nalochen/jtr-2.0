import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import {teamOverviewSelector} from '@jtr/business-domain/team';
import {TeamOverviewData} from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-team-overview.component.html',
  styleUrl: './page-team-overview.component.less',
})
export class PageTeamOverviewComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get teams$(): Observable<TeamOverviewData[]> {
    return this.store$.select(teamOverviewSelector);
  }
}
