import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

import {
  TournamentTeamData,
  TournamentTeamsData,
} from '@jtr/data-domain/store';

import { DataContainerComponent, TeamComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tournament-teams',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatDivider,
    DataContainerComponent,
    TeamComponent,
    MatIcon,
    TranslatePipe,
  ],
  templateUrl: './tournament-teams.component.html',
  styleUrl: './tournament-teams.component.less',
})
export class TournamentTeamsComponent implements OnInit {
  @Input() public teams!: TournamentTeamsData;

  public participatingTeams: TournamentTeamData[] = [];
  public waitingTeams: TournamentTeamData[] = [];
  public showPlacement = false;

  public ngOnInit(): void {
    this.showPlacement = this.teams.participating.map((team) => team.placement).some((placement) => placement !== null);

    if(this.showPlacement) {
      this.participatingTeams = [...this.teams.participating].sort((a, b) => a.placement - b.placement);
    } else {
      this.participatingTeams = [...this.teams.participating].sort((a, b) => a.registrationOrder - b.registrationOrder);
      this.waitingTeams = [...this.teams.waiting].sort((a, b) => a.registrationOrder - b.registrationOrder);
    }
  }
}
