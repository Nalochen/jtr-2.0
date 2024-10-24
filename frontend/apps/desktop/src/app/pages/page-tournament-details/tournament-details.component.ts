import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentDetailsHeaderComponent } from './header/tournament-details-header.component';
import { TournamentInformationCategoriesComponent } from './tournament-information-categories/tournament-information-categories.component';
import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../ui-shared';
import { TournamentRegistrationComponent } from './registration/tournament-registration.component';
import { TournamentTeamsComponent } from './teams/tournament-teams.component';
import { Store } from '@ngrx/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { Observable } from 'rxjs';
import { TournamentData } from '@jtr/data-domain/store';
import { tournamentDetailsDataSelector } from '@jtr/business-domain/tournament';

@Component({
  selector: 'page-tournament-details',
  standalone: true,
  imports: [
    CommonModule,
    TournamentDetailsHeaderComponent,
    TournamentInformationCategoriesComponent,
    DataContainerComponent,
    DataContainerRowComponent,
    TournamentRegistrationComponent,
    TournamentTeamsComponent,
  ],
  templateUrl: './tournament-details.component.html',
  styleUrl: './tournament-details.component.less',
})
export class TournamentDetailsComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData | null> {
    return this.store$.select(tournamentDetailsDataSelector);
  }
}
