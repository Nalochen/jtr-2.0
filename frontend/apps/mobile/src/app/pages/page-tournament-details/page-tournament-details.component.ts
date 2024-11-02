import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {Observable} from 'rxjs';

import {Store} from '@ngrx/store';

import {
  tournamentDetailsRegistrationOpenAtSelector,
  tournamentDetailsSelector,
  tournamentDetailsTeamsSelector
} from '@jtr/business-domain/tournament';
import {TournamentData, TournamentTeamData} from '@jtr/data-domain/store';
import {SingletonGetter} from '@jtr/infrastructure/cache';

import { DataContainerComponent, DataContainerRowComponent } from '../../ui-shared';
import { TournamentBottomBarComponent } from './tournament-bottom-bar/tournament-bottom-bar.component';
import {TournamentHeaderComponent} from './tournament-header/tournament-header.component';
import {
  TournamentInformationComponent
} from './tournament-information/tournament-information.component';
import { TournamentTeamsComponent } from './tournament-teams/tournament-teams.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TournamentHeaderComponent,
    TournamentInformationComponent,
    DataContainerComponent,
    DataContainerRowComponent,
    TournamentTeamsComponent,
    TournamentBottomBarComponent,
  ],
  templateUrl: './page-tournament-details.component.html',
  styleUrl: './page-tournament-details.component.less',
})
export class PageTournamentDetailsComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData|null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  @SingletonGetter()
  public get registrationOpenAt$(): Observable<string|undefined> {
    return this.store$.select(tournamentDetailsRegistrationOpenAtSelector);
  }

  @SingletonGetter()
  public get teams$(): Observable<TournamentTeamData|undefined> {
    return this.store$.select(tournamentDetailsTeamsSelector);
  }
}
