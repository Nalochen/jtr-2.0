import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { MatIcon } from '@angular/material/icon';

import { TournamentTeamData, TournamentTeamsData } from '@jtr/data-domain/store';

import {
  DataContainerExpandableComponent,
  TeamComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'tournament-teams',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DividerModule,
    DataContainerExpandableComponent,
    TeamComponent,
    MatIcon,
    TranslatePipe,
  ],
  templateUrl: './tournament-teams.component.html',
  styleUrl: './tournament-teams.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentTeamsComponent implements OnInit {
  @Input() public teams!: TournamentTeamsData;
  @Input() public showPlacement = false;

  public participatingTeams: TournamentTeamData[] = [];
  public waitingTeams: TournamentTeamData[] = [];

  public ngOnInit(): void {
    if(this.showPlacement) {
      this.participatingTeams = [...this.teams.participating].sort((a, b) => a.placement - b.placement);
    } else {
      this.participatingTeams = [...this.teams.participating].sort((a, b) => a.registrationOrder - b.registrationOrder);
      this.waitingTeams = [...this.teams.waiting].sort((a, b) => a.registrationOrder - b.registrationOrder);
    }
  }
}
