import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';

import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

import {TournamentTeamData, TournamentTeamsData} from '@jtr/data-domain/store';

import { DataContainerComponent, TeamComponent } from '../../../ui-shared';

@Component({
  selector: 'tournament-teams',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatDivider, DataContainerComponent, TeamComponent, MatIcon],
  templateUrl: './tournament-teams.component.html',
  styleUrl: './tournament-teams.component.less',
})
export class TournamentTeamsComponent implements OnInit {
  @Input() public teams!: TournamentTeamsData;

  public participatingTeams: TournamentTeamData[] = [];
  public waitingTeams: TournamentTeamData[] = [];

  public ngOnInit(): void {
    this.participatingTeams = this.teams.participating;
    this.waitingTeams = this.teams.waiting;
  }
}
