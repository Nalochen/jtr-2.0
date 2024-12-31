import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { teamDetailsSelector } from '@jtr/business-domain/team';
import { TeamData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { TeamHeaderComponent } from './team-header/team-header.component';
import { TeamInformationComponent } from './team-information/team-information.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamOtherTournamentsComponent } from './team-other-tournaments/team-other-tournaments.component';
import { TeamOwnTournamentsComponent } from './team-own-tournaments/team-own-tournaments.component';
import { Router } from '@angular/router';
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
    MatButtonModule,
  ],
  templateUrl: './page-team-details.component.html',
  styleUrl: './page-team-details.component.less',
})
export class PageTeamDetailsComponent {
  public teamId: number | null = null;

  constructor(private readonly store$: Store, private readonly router: Router) {
    this.team$.pipe(
      takeUntilDestroyed(),
    ).subscribe(
      (team) => {
        if (team) {
          this.teamId = team.id;
        }
      }
    );
  }

  @SingletonGetter()
  public get team$(): Observable<TeamData | null> {
    return this.store$.select(teamDetailsSelector);
  }

  public redirectToManageTeam() {
    this.router.navigate(['manage-team-details', this.teamId]);
  }
}
