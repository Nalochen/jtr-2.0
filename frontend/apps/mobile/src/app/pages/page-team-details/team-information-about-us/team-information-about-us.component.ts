import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';

@Component({
  selector: 'team-about-us',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerRowComponent,
    DataContainerComponent,
  ],
  templateUrl: './team-information-about-us.component.html',
  styleUrl: './team-information-about-us.component.less',
})
export class TeamInformationAboutUsComponent {
  @Input() public team!: TeamData;
}
