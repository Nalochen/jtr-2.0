import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatIcon } from '@angular/material/icon';

import {
  TournamentTeamData,
  TournamentTeamsData,
} from '@jtr/data-domain/store';

import { DataContainerComponent, TeamComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'tournament-teams',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    TeamComponent,
    MatIcon,
    TranslatePipe,
    DividerModule,
  ],
  templateUrl: './tournament-teams.component.html',
  styleUrl: './tournament-teams.component.less',
})
export class TournamentTeamsComponent implements OnInit {
  constructor(private readonly router: Router) {}

  @Input() public teams!: TournamentTeamsData;

  public participatingTeams: TournamentTeamData[] = [];
  public waitingTeams: TournamentTeamData[] = [];
  public showPlacement = false;

  public ngOnInit(): void {
    this.showPlacement = this.teams.participating
      .map((team) => team.placement)
      .some((placement) => placement !== null);

    if (this.showPlacement) {
      this.participatingTeams = [...this.teams.participating].sort(
        (a, b) => a.placement - b.placement
      );
    } else {
      this.participatingTeams = [...this.teams.participating].sort(
        (a, b) => a.registrationOrder - b.registrationOrder
      );
      this.waitingTeams = [...this.teams.waiting].sort(
        (a, b) => a.registrationOrder - b.registrationOrder
      );
    }
  }

  protected redirectToTeam(escapedName: string): void {
    this.router.navigate(['team-details', escapedName]);
  }
}
