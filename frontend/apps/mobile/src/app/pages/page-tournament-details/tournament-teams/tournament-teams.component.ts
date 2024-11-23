import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

import {TournamentTeamData} from '@jtr/data-domain/store';

import { DataContainerExpandableComponent, TeamComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tournament-teams',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatDivider,
    DataContainerExpandableComponent,
    TeamComponent,
    MatIcon,
    TranslatePipe
  ],
  templateUrl: './tournament-teams.component.html',
  styleUrl: './tournament-teams.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentTeamsComponent {
  @Input() public registeredTeams: TournamentTeamData[] = [];
  @Input() public reservedTeams: TournamentTeamData[] = [];
}
