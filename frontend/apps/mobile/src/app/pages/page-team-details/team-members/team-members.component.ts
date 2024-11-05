import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input} from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { DataContainerExpandableComponent, DataContainerRowComponent } from '../../../ui-shared';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerExpandableComponent, DataContainerRowComponent],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.less',
})
export class TeamMembersComponent {
  @Input() public team!: TeamData;
}
