import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { teamDetailsSelector } from '@jtr/business-domain/team';
import { TeamData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { AuthService } from '../../business-rules/auth/auth.service';

import { ButtonComponent } from '../../ui-shared';
import { TeamHeaderComponent } from './team-header/team-header.component';
import { TeamInformationComponent } from './team-information/team-information.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamOtherTournamentsComponent } from './team-other-tournaments/team-other-tournaments.component';
import { TeamOwnTournamentsComponent } from './team-own-tournaments/team-own-tournaments.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TeamHeaderComponent,
    TeamMembersComponent,
    TeamInformationComponent,
    TeamOwnTournamentsComponent,
    TeamOtherTournamentsComponent,
    ButtonComponent,
    TranslatePipe
  ],
  templateUrl: './page-team-details.component.html',
  styleUrl: './page-team-details.component.less',
})
export class PageTeamDetailsComponent {
  public teamEscapedName: string | null = null;
  public canEditTeam: boolean = false;
  public isMemberOfTeam: boolean = false;

  constructor(
    private readonly store$: Store,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.team$.pipe(takeUntilDestroyed()).subscribe((team) => {
      if (team) {
        this.teamEscapedName = team.escapedName;

        this.authService.isAdminOfTeam(this.teamEscapedName).pipe().subscribe(
          canEditTeam => this.canEditTeam = canEditTeam
        );

        this.authService.isMemberOfTeam(this.teamEscapedName).pipe().subscribe(
          isMemberOfTeam => this.isMemberOfTeam = isMemberOfTeam
        );
      }
    });
  }

  @SingletonGetter()
  public get team$(): Observable<TeamData | null> {
    return this.store$.select(teamDetailsSelector);
  }

  public redirectToManageTeam() {
    this.router.navigate(['manage-team-details', this.teamEscapedName]);
  }
}
