import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Observable, of, switchMap } from 'rxjs';

import { Store } from '@ngrx/store';

import {
  tournamentDetailsSelector,
  tournamentDetailsTeamsSelector,
} from '@jtr/business-domain/tournament';
import { TournamentData, TournamentTeamsData } from '@jtr/data-domain/store';
import { TournamentStatus } from '@jtr/data-domain/tournament-data';
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
})
export class PageTournamentDetailsComponent {
  constructor(private store$: Store) {
    this.canRegister$ = this.tournament$.pipe(
      switchMap((tournament) => {
        if (tournament?.registrationStartDate) {
          const registrationDate = new Date(tournament.registrationStartDate);
          return of(registrationDate <= new Date());
        }
        return of(false);
      })
    );
  }

  public readonly TournamentStatus = TournamentStatus;
  public canRegister$: Observable<boolean>;

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData | null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  @SingletonGetter()
  public get teams$(): Observable<TournamentTeamsData | undefined> {
    return this.store$.select(tournamentDetailsTeamsSelector);
  }
}
