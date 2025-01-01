import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { tournamentOverviewSelector } from '@jtr/business-domain/tournament';
import { TournamentOverviewData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { ButtonColorEnum, ButtonComponent,ButtonTypeEnum, TournamentRowComponent } from '../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TournamentRowComponent, TranslatePipe, ButtonComponent],
  templateUrl: './page-tournament-overview.component.html',
  styleUrl: './page-tournament-overview.component.less',
})
export class PageTournamentOverviewComponent {
  public ButtonTypeEnum = ButtonTypeEnum;
  public ButtonColorEnum = ButtonColorEnum;

  constructor(private readonly store$: Store) {}

  @SingletonGetter()
  public get tournaments$(): Observable<TournamentOverviewData[]> {
    return this.store$.select(tournamentOverviewSelector);
  }

  public navigateToPreviousTournaments(): void {
    window.open('tournaments-overview/previous', '_self');
  }
}
