import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {Observable} from 'rxjs';

import {Store} from '@ngrx/store';

import {tournamentOverviewDataSelector} from '@jtr/business-domain/tournament';
import {TournamentOverviewData} from '@jtr/data-domain/store';
import {SingletonGetter} from '@jtr/infrastructure/cache';

import {TournamentRowComponent} from './tournament-row/tournament-row.component';

@Component({
  standalone: true,
  imports: [CommonModule, TournamentRowComponent],
  templateUrl: './page-tournament-overview.component.html',
  styleUrl: './page-tournament-overview.component.less',
})
export class PageTournamentOverviewComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get tournaments$(): Observable<TournamentOverviewData[]> {
    return this.store$.select(tournamentOverviewDataSelector);
  }
}
