import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { ButtonComponent, ButtonColorEnum, ButtonTypeEnum } from '../../../ui-shared';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'team-other-tournaments',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ButtonComponent,
    TranslatePipe
  ],
  templateUrl: './team-other-tournaments.component.html',
  styleUrl: './team-other-tournaments.component.less',
})
export class TeamOtherTournamentsComponent {
  @Input() public team!: TeamData;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(private readonly router: Router) {}

  protected redirectToTournament(tournamentId: number) {
    this.router.navigate(['manage-tournament', tournamentId])
  }
}
