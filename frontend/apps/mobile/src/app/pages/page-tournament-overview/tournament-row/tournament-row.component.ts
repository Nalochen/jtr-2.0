import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatIconButton} from '@angular/material/button';

import {TournamentOverviewData} from '@jtr/data-domain/store';

import {DataContainerComponent, DataContainerRowComponent} from '../../../ui-shared';
import {StatusIndicatorComponent} from '../../../ui-shared/lib/status-indicator/status-indicator.component';

@Component({
  selector: 'tournament-row',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, MatIconButton, StatusIndicatorComponent, DataContainerRowComponent],
  templateUrl: './tournament-row.component.html',
  styleUrl: './tournament-row.component.less',
})
export class TournamentRowComponent {
  @Input() public tournament!: TournamentOverviewData;
}
