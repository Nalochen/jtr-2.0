import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import {teamDetailsSelector} from '@jtr/business-domain/team';
import {TeamData} from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-team-details.component.html',
  styleUrl: './page-team-details.component.less',
})
export class PageTeamDetailsComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get team$(): Observable<TeamData|null> {
    return this.store$.select(teamDetailsSelector);
  }
}
