import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatIconButton } from '@angular/material/button';

import { TournamentOverviewData } from '@jtr/data-domain/store';

import {
  DataContainerExpandableComponent,
  DataContainerRowComponent,
  StatusIndicatorComponent,
} from '../../../ui-shared';

@Component({
  selector: 'tournament-row',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerExpandableComponent,
    MatIconButton,
    StatusIndicatorComponent,
    DataContainerRowComponent,
  ],
  templateUrl: './tournament-row.component.html',
  styleUrl: './tournament-row.component.less',
})
export class TournamentRowComponent {
  @Input() public tournament!: TournamentOverviewData;
}
