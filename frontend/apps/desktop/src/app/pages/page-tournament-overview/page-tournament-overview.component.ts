import {CommonModule} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { tournamentOverviewSelector } from '@jtr/business-domain/tournament';
import { TournamentOverviewData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import {TournamentRowComponent} from './tournament-row/tournament-row.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TournamentRowComponent,
    TranslatePipe,
  ],
  templateUrl: './page-tournament-overview.component.html',
  styleUrl: './page-tournament-overview.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTournamentOverviewComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get tournaments$(): Observable<TournamentOverviewData[]> {
    return this.store$.select(tournamentOverviewSelector);
  }
}
