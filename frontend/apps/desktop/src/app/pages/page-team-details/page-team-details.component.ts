import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { teamDetailsSelector } from '@jtr/business-domain/team';
import { TeamData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { AuthService } from '../../../../../mobile/src/app/business-rules/auth/auth.service';

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
    TranslatePipe,
    ButtonComponent
  ],
  templateUrl: './page-team-details.component.html',
  styleUrl: './page-team-details.component.less',
})
export class PageTeamDetailsComponent implements OnDestroy {
  public teamEscapedName: string | null = null;
  public canEditTeam: boolean = false;
  public isMemberOfTeam: boolean = false;
  public destroy$ = new Subject<void>();

  constructor(
    private readonly store$: Store,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.team$.pipe(takeUntil(this.destroy$)).subscribe((team) => {
      if (team) {
        this.teamEscapedName = team.escapedName;

        this.authService.isAdminOfTeam(this.teamEscapedName).pipe(takeUntil(this.destroy$)).subscribe(
          canEditTeam => this.canEditTeam = canEditTeam
        )

        this.authService.isMemberOfTeam(this.teamEscapedName).pipe(takeUntil(this.destroy$)).subscribe(
          isMemberOfTeam => this.isMemberOfTeam = isMemberOfTeam
        )
      }
    });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @SingletonGetter()
  public get team$(): Observable<TeamData | null> {
    return this.store$.select(teamDetailsSelector);
  }

  public redirectToManageTeam() {
    this.router.navigate(['manage-team-details', this.teamEscapedName]);
  }
}
