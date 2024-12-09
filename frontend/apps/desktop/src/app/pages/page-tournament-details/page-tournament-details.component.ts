import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../ui-shared';
import { TournamentHeaderComponent } from './tournament-header/tournament-header.component';
import { TournamentInformationComponent } from './tournament-information/tournament-information.component';
import { TournamentRegistrationComponent } from './tournament-registration/tournament-registration.component';
import { TournamentTeamsComponent } from './tournament-teams/tournament-teams.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TournamentHeaderComponent,
    TournamentInformationComponent,
    DataContainerComponent,
    DataContainerRowComponent,
    TournamentRegistrationComponent,
    TournamentTeamsComponent,
  ],
  templateUrl: './page-tournament-details.component.html',
  styleUrl: './page-tournament-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
