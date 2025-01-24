import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { teamDetailsSelector } from '@jtr/business-domain/team';
import { editTeamForm } from '@jtr/business-domain/team';
import { TeamData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { InfoButtonComponent } from '../../ui-shared';
import { TeamBottomBarComponent } from './team-bottom-bar/team-bottom-bar.component';
import { TeamHeaderComponent } from './team-header/team-header.component';
import { TeamInformationComponent } from './team-information/team-information.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TeamHeaderComponent,
    TeamInformationComponent,
    TeamMembersComponent,
    TeamBottomBarComponent,
    InfoButtonComponent,
    ReactiveFormsModule,
    TranslatePipe,
  ],
  templateUrl: './page-manage-team.component.html',
  styleUrl: './page-manage-team.component.less',
})
export class PageManageTeamDetailsComponent implements OnInit, OnDestroy {
  public readonly form = editTeamForm;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private store$: Store,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  @SingletonGetter()
  public get team$(): Observable<TeamData | null> {
    return this.store$.select(teamDetailsSelector);
  }

  public ngOnInit() {
    this.team$.pipe(takeUntil(this.destroy$)).subscribe((team) => {
      if (!team) {
        this.createEmptyFormControl();
      } else {
        this.createFormControlFromTeam(team);
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createEmptyFormControl(): void {
    this.form.controls.aboutUs.setValue('');
    this.form.controls.city.setValue('');
    this.form.controls.contacts.setValue([]);
    this.form.controls.isMixTeam.setValue(false);
    this.form.controls.name.setValue('');
    this.form.controls.trainingTime.setValue('');
  }

  public createFormControlFromTeam(team: TeamData): void {
    this.form.controls.id.setValue(team.id);
    this.form.controls.aboutUs.setValue(team.aboutUs);
    this.form.controls.city.setValue(team.city);
    this.form.controls.contacts.clear();
    team.contacts.forEach((contact) => {
      this.form.controls.contacts.push(new FormControl(contact));
    });
    this.form.controls.isMixTeam.setValue(team.isMixTeam);
    this.form.controls.name.setValue(team.name);
    this.form.controls.trainingTime.setValue(team.trainingTime);
  }
}
