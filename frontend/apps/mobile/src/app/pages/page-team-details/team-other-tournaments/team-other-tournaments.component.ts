import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input} from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { ButtonComponent } from '../../../ui-shared';

@Component({
  selector: 'team-other-tournaments',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent],
  templateUrl: './team-other-tournaments.component.html',
  styleUrl: './team-other-tournaments.component.less',
})
export class TeamOtherTournamentsComponent {
  @Input() public team!: TeamData;
}
