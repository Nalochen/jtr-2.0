import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { TeamService } from '../../../business-rules/team/team.service';

@Component({
  selector: 'team-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './team-header.component.html',
  styleUrl: './team-header.component.less',
})
export class TeamHeaderComponent {
  constructor(private readonly teamService: TeamService) {}

  @Input() public team!: TeamData;

  public getPictureUrl(picture: string): string {
    return this.teamService.getPictureUrl(picture);
  }
}
