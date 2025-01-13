import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { ButtonComponent, ButtonTypeEnum, ButtonColorEnum } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'team-own-tournaments',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent, TranslatePipe],
  templateUrl: './team-own-tournaments.component.html',
  styleUrl: './team-own-tournaments.component.less',
})
export class TeamOwnTournamentsComponent {
  @Input() public team!: TeamData;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(private readonly router: Router) {}

  protected redirectToTournament(tournamentId: number) {
    this.router.navigate(['tournament-details', tournamentId])
  }
}
