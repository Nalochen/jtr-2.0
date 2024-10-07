import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RegisterDataComponent} from '../register/register-data.component';

@Component({
  selector: 'tournament-information-categories',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RegisterDataComponent],
  templateUrl: './tournament-information-categories.component.html',
  styleUrl: './tournament-information-categories.component.less',
})
export class TournamentInformationCategoriesComponent {}
