import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

import { ChipComponent, DataContainerComponent, DataContainerRowComponent, InfoButtonComponent } from '../../../ui-shared';

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
    MatDividerModule,
  ],
  templateUrl: './tournament-information-categories.component.html',
  styleUrl: './tournament-information-categories.component.less',
})
export class TournamentInformationCategoriesComponent {}
