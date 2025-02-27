import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import {
  firstValueFrom,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import {
  teamDetailsEscapedNameSelector,
  teamDetailsSelector,
} from '@jtr/business-domain/team';
import { TeamData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { AuthService } from '../../business-rules/auth/auth.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../ui-shared';
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
    TranslatePipe,
  ],
  templateUrl: './page-team-details.component.html',
  styleUrl: './page-team-details.component.less',
})
export class PageTeamDetailsComponent implements OnDestroy {
  public teamEscapedName: string | null = null;
  public canEditTeam: boolean = false;
  public isMemberOfTeam: boolean = false;
  public destroy$ = new Subject<void>();
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(
    private readonly store$: Store,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.team$.pipe(takeUntil(this.destroy$)).subscribe((team) => {
      if (team) {
        this.teamEscapedName = team.escapedName;

        this.authService
          .isAdminOfTeam(this.teamEscapedName)
          .pipe(takeUntil(this.destroy$))
          .subscribe((canEditTeam) => (this.canEditTeam = canEditTeam));

        this.authService
          .isMemberOfTeam(this.teamEscapedName)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            (isMemberOfTeam) => (this.isMemberOfTeam = isMemberOfTeam)
          );
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

  public createTournament() {
    this.router.navigate(['create-tournament/tournament-information']);
  }
}
