import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TournamentDetailsHeaderComponent} from './header/tournament-details-header.component';
import {
  TournamentInformationCategoriesComponent
} from './tournament-information-categories/tournament-information-categories.component';

@Component({
  selector: 'app-tournament-details',
  standalone: true,
  imports: [CommonModule, TournamentDetailsHeaderComponent, TournamentInformationCategoriesComponent],
  templateUrl: './tournament-details.component.html',
  styleUrl: './tournament-details.component.less',
})
export class TournamentDetailsComponent {}
