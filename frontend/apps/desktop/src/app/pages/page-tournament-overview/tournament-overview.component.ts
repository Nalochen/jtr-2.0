import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { tournamentOverviewDataSelector } from '@jtr/business-domain/tournament';
import { TournamentOverviewData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { DataContainerComponent } from '../../ui-shared';
import { MatButtonModule } from '@angular/material/button';
import { StatusIndicatorComponent } from '../../ui-shared/lib/status-indicator/status-indicator.component';

@Component({
  selector: 'page-tournament-overview',
  standalone: true,
  imports: [CommonModule, DataContainerComponent, MatButtonModule, StatusIndicatorComponent],
  templateUrl: './tournament-overview.component.html',
  styleUrl: './tournament-overview.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentOverviewComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get tournaments$(): Observable<TournamentOverviewData[]> {
    return this.store$.select(tournamentOverviewDataSelector);
  }
}
