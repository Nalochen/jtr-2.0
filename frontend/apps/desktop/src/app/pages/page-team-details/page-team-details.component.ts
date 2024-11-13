import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import {teamDetailsSelector} from '@jtr/business-domain/team';
import {TeamData} from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { TeamHeaderComponent } from './team-header/team-header.component';
import { TeamInformationComponent } from './team-information/team-information.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamOtherTournamentsComponent } from './team-other-tournaments/team-other-tournaments.component';
import { TeamOwnTournamentsComponent } from './team-own-tournaments/team-own-tournaments.component';

@Component({
  standalone: true,
  imports: [CommonModule, TeamHeaderComponent, TeamMembersComponent, TeamInformationComponent, TeamOwnTournamentsComponent, TeamOtherTournamentsComponent],
  templateUrl: './page-team-details.component.html',
  styleUrl: './page-team-details.component.less',
})
export class PageTeamDetailsComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get team$(): Observable<TeamData|null> {
    return this.store$.select(teamDetailsSelector);
  }
}
