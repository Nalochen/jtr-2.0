import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { firstValueFrom, Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import {
  teamDetailsEscapedNameSelector,
  teamDetailsSelector,
} from '@jtr/business-domain/team';
import { TeamData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { ButtonComponent } from '../../ui-shared';
import { AuthService } from '../../business-rules/auth/auth.service';

import { TeamHeaderComponent } from './team-header/team-header.component';
import { TeamInformationComponent } from './team-information/team-information.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamOtherTournamentsComponent } from './team-other-tournaments/team-other-tournaments.component';
import { TeamOwnTournamentsComponent } from './team-own-tournaments/team-own-tournaments.component';
import { TranslatePipe } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  @SingletonGetter()
  public get teamEscapedName$(): Observable<string | undefined> {
    return this.store$.select(teamDetailsEscapedNameSelector);
  }

  public isAdminOfTeam$(): Observable<boolean> {
    return this.teamEscapedName$.pipe(
      map((escapedName) => {
        if (!escapedName) {
          return false;
        }

        return this.authService.isAdminOfTeam(escapedName);
      }),
      switchMap((isAdmin) =>
        isAdmin instanceof Observable ? isAdmin : of(isAdmin)
      )
    );
  }

  public async redirectToManageTeam() {
    this.router.navigate([
      'manage-team-details',
      await firstValueFrom(this.teamEscapedName$),
    ]);
  }
}
