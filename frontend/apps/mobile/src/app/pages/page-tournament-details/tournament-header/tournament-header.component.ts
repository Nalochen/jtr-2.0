import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TournamentData } from '@jtr/data-domain/store';

import { TeamService } from '../../../../../../desktop/src/app/business-rules/team/team.service';

@Component({
  selector: 'tournament-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatProgressBarModule],
  templateUrl: './tournament-header.component.html',
  styleUrl: './tournament-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentHeaderComponent {
  constructor(private readonly teamService: TeamService) {}

  @Input() public tournament!: TournamentData;

  public getPictureUrl(picture: string): string {
    return this.teamService.getPictureUrl(picture);
  }
}
