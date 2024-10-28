import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DataContainerComponent, DataContainerRowComponent } from '../../ui-shared';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import {TournamentDetailsHeaderComponent} from './header/tournament-details-header.component';
import { TournamentTeamsComponent } from './teams/tournament-teams.component';
import {
  TournamentInformationCategoriesComponent
} from './tournament-information-categories/tournament-information-categories.component';

@Component({
  selector: 'app-tournament-details',
  standalone: true,
  imports: [
    CommonModule,
    TournamentDetailsHeaderComponent,
    TournamentInformationCategoriesComponent,
    DataContainerComponent,
    DataContainerRowComponent,
    TournamentTeamsComponent,
    BottomBarComponent,
  ],
  templateUrl: './tournament-details.component.html',
  styleUrl: './tournament-details.component.less',
})
export class TournamentDetailsComponent {}
