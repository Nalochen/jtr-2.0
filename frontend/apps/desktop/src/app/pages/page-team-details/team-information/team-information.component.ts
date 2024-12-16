import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { TeamInformationAboutUsComponent } from '../team-information-about-us/team-information-about-us.component';
import { TeamInformationContactsComponent } from '../team-information-contacts/team-information-contacts.component';
import { TeamInformationStatisticsComponent } from '../team-information-statistics/team-information-statistics.component';
import { TeamInformationTrainingComponent } from '../team-information-training/team-information-training.component';

@Component({
  selector: 'team-information',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TeamInformationTrainingComponent,
    TeamInformationContactsComponent,
    TeamInformationStatisticsComponent,
    TeamInformationAboutUsComponent,
  ],
  templateUrl: './team-information.component.html',
  styleUrl: './team-information.component.less',
})
export class TeamInformationComponent {
  @Input() public team!: TeamData;
}
