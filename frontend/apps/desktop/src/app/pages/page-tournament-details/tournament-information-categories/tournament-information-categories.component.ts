import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'tournament-information-categories',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, DataContainerRowComponent, MatIcon],
  templateUrl: './tournament-information-categories.component.html',
  styleUrl: './tournament-information-categories.component.less',
})
export class TournamentInformationCategoriesComponent {}
