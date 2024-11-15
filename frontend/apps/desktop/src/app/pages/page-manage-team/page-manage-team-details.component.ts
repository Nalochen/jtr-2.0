import {CommonModule} from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { teamDetailsSelector } from '@jtr/business-domain/team';
import { TeamData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { editTeamForm } from '../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { InfoButtonComponent } from '../../ui-shared';
import { TeamBottomBarComponent } from './team-bottom-bar/team-bottom-bar.component';
import { TeamHeaderComponent } from './team-header/team-header.component';
import { TeamInformationComponent } from './team-information/team-information.component';
import { TeamMembersComponent } from './team-members/team-members.component';

@Component({
  standalone: true,
  imports: [CommonModule, TeamHeaderComponent, TeamInformationComponent, TeamMembersComponent, TeamBottomBarComponent, InfoButtonComponent, ReactiveFormsModule],
  templateUrl: './page-manage-team.component.html',
  styleUrl: './page-manage-team.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PageManageTeamDetailsComponent implements OnInit{
  public readonly form = editTeamForm;
  private readonly destroy$ = new Subject<void>();

  constructor(private store$: Store, private changeDetectorRef: ChangeDetectorRef) {}

  @SingletonGetter()
  public get team$(): Observable<TeamData|null> {
    return this.store$.select(teamDetailsSelector);
  }

  public ngOnInit() {
    this.team$.pipe(takeUntil(this.destroy$)).subscribe(team => {
      if (!team) {
        return;
      }

      this.form.controls.aboutUs.setValue(team?.aboutUs);
      this.form.controls.city.setValue(team?.city);
      team?.contacts.forEach(contact => {
        this.form.controls.contacts.push(new FormControl(contact));
      });
      this.form.controls.contacts.setValue(team?.contacts);
      this.form.controls.isMixTeam.setValue(team?.isMixTeam);
      this.form.controls.logo.setValue(team?.logo);

      team?.members.forEach(member => {
        this.form.controls.members.value.push({
          id: new FormControl(member.id),
          name: new FormControl(member.name),
          role: new FormControl(member.role),
        });
      });

      this.form.controls.name.setValue(team?.name);
      this.form.controls.trainingTime.setValue(team?.trainingTime);

      this.changeDetectorRef.markForCheck();
    });
  }
}
