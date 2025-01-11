import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TournamentData } from '@jtr/data-domain/store';

import { TeamService } from '../../../business-rules/team/team.service';

@Component({
  selector: 'tournament-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './tournament-header.component.html',
  styleUrl: './tournament-header.component.less',
})
export class TournamentHeaderComponent {
  constructor(private readonly teamService: TeamService) {}

  @Input() public tournament!: TournamentData;

  public getPictureUrl(picture: string): string {
    return this.teamService.getPictureUrl(picture);
  }
}
