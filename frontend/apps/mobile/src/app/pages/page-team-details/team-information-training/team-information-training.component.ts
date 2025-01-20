import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';

import { TeamData } from '@jtr/data-domain/store';

import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'team-training',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    DataContainerRowComponent,
    MatDividerModule,
    TranslatePipe
  ],
  templateUrl: './team-information-training.component.html',
  styleUrl: './team-information-training.component.less',
})
export class TeamInformationTrainingComponent {
  @Input() public team!: TeamData;
}
