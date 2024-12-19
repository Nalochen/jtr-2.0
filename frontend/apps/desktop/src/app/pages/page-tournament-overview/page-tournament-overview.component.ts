import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { tournamentOverviewSelector } from '@jtr/business-domain/tournament';
import { TournamentOverviewData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent, TournamentRowComponent, ButtonColorEnum, ButtonTypeEnum } from '../../ui-shared';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, TournamentRowComponent, TranslatePipe, ButtonComponent],
  templateUrl: './page-tournament-overview.component.html',
  styleUrl: './page-tournament-overview.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTournamentOverviewComponent {
  public ButtonTypeEnum = ButtonTypeEnum;
  public ButtonColorEnum = ButtonColorEnum;

  constructor(private readonly store$: Store, private readonly router: Router) {}

  @SingletonGetter()
  public get tournaments$(): Observable<TournamentOverviewData[]> {
    return this.store$.select(tournamentOverviewSelector);
  }

  public navigateToPreviousTournaments(): void {
    this.router.navigate(['tournaments-overview/previous']);
  }
}
