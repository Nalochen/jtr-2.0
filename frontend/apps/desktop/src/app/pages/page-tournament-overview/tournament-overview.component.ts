import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { TournamentOverviewData } from '@jtr/data-domain/store';
import { Observable } from 'rxjs';
import { tournamentOverviewDataSelector } from '@jtr/business-domain/tournament';
import { SingletonGetter } from '@jtr/infrastructure/cache';

@Component({
  selector: 'page-tournament-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournament-overview.component.html',
  styleUrl: './tournament-overview.component.less',
})
export class TournamentOverviewComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get tournaments$(): Observable<TournamentOverviewData[]> {
    return this.store$.select(tournamentOverviewDataSelector);
  }
}
