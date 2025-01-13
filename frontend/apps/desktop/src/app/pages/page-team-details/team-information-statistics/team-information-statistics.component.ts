import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'team-statistics',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    DataContainerRowComponent,
    TranslatePipe
  ],
  templateUrl: './team-information-statistics.component.html',
  styleUrl: './team-information-statistics.component.less',
})
export class TeamInformationStatisticsComponent {
  @Input() public team!: TeamData;
}
