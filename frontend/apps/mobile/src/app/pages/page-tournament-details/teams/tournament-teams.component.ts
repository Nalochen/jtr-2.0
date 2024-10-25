import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { DataContainerComponent, TeamComponent } from '../../../ui-shared';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'tournament-teams',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatDivider, DataContainerComponent, TeamComponent, MatIcon],
  templateUrl: './tournament-teams.component.html',
  styleUrl: './tournament-teams.component.less',
})
export class TournamentTeamsComponent {
  @Input() public registeredTeams: string[] = [];
  @Input() public reservedTeams: string[] = [];
}
