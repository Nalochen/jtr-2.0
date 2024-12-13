import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatIconButton} from '@angular/material/button';

import { TeamOverviewData, TournamentOverviewData } from '@jtr/data-domain/store';

import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum,DataContainerComponent } from '../../../ui-shared';
import {StatusIndicatorComponent} from '../../../ui-shared/lib/status-indicator/status-indicator.component';

@Component({
  selector: 'team-row',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, MatIconButton, StatusIndicatorComponent, ButtonComponent],
  templateUrl: './team-row.component.html',
  styleUrl: './team-row.component.less',
})
export class TeamRowComponent {
  @Input() public team!: TeamOverviewData;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}
