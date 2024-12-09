import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import {
  tournamentDetailsregistrationStartDateSelector,
  tournamentDetailsSelector,
  tournamentDetailsTeamsSelector,
} from '@jtr/business-domain/tournament';
import { TournamentData, TournamentTeamsData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import {
  DataContainerExpandableComponent,
  DataContainerRowComponent,
} from '../../ui-shared';
import { TournamentBottomBarComponent } from './tournament-bottom-bar/tournament-bottom-bar.component';
import { TournamentHeaderComponent } from './tournament-header/tournament-header.component';
import { TournamentInformationComponent } from './tournament-information/tournament-information.component';
import { TournamentTeamsComponent } from './tournament-teams/tournament-teams.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TournamentHeaderComponent,
    TournamentInformationComponent,
    DataContainerExpandableComponent,
    DataContainerRowComponent,
    TournamentTeamsComponent,
    TournamentBottomBarComponent,
    TranslatePipe,
  ],
  templateUrl: './page-tournament-details.component.html',
  styleUrl: './page-tournament-details.component.less',
})
export class PageTournamentDetailsComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData | null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  @SingletonGetter()
  public get registrationStartDate$(): Observable<string | undefined> {
    return this.store$.select(tournamentDetailsregistrationStartDateSelector);
  }

  @SingletonGetter()
  public get teams$(): Observable<TournamentTeamsData | undefined> {
    return this.store$.select(tournamentDetailsTeamsSelector);
  }
}
