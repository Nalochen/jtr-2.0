import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

import {TournamentTeamData} from '@jtr/data-domain/store';

import { DataContainerComponent, TeamComponent } from '../../../ui-shared';

@Component({
  selector: 'tournament-teams',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatDivider, DataContainerComponent, TeamComponent, MatIcon],
  templateUrl: './tournament-teams.component.html',
  styleUrl: './tournament-teams.component.less',
})
export class TournamentTeamsComponent {
  @Input() public registeredTeams: TournamentTeamData[] = [];
  @Input() public reservedTeams: TournamentTeamData[] = [];
}
