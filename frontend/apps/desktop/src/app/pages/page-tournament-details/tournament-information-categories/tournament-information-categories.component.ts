import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DataContainerComponent, DataContainerRowComponent, ChipComponent, InfoButtonComponent } from '../../../ui-shared';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'tournament-information-categories',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    DataContainerRowComponent,
    MatIcon,
    MatButtonModule,
    ChipComponent,
    InfoButtonComponent,
  ],
  templateUrl: './tournament-information-categories.component.html',
  styleUrl: './tournament-information-categories.component.less',
})
export class TournamentInformationCategoriesComponent {}
