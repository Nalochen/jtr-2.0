import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { firstValueFrom, Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import {
  EditTeamForm,
  TeamDataService,
  teamDetailsSelector,
} from '@jtr/business-domain/team';
import { TeamData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { TeamService } from '../../../business-rules/team/team.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'team-bottom-bar',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ButtonComponent,
    TranslatePipe,
    DialogModule,
  ],
  templateUrl: './team-bottom-bar.component.html',
  styleUrl: './team-bottom-bar.component.less',
  providers: [TeamDataService, TeamService],
})
export class TeamBottomBarComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected isDeleteDialogVisible = false;

  @SingletonGetter()
  public get team$(): Observable<TeamData | null> {
    return this.store$.select(teamDetailsSelector);
  }

  constructor(
    private readonly teamService: TeamService,
    private readonly teamDataService: TeamDataService,
    private readonly router: Router,
    private readonly store$: Store
  ) {}

  public onOpenDeleteDialog() {
    this.isDeleteDialogVisible = true;
  }

  public async onDeleteTeam() {
    const teamId = (await firstValueFrom(this.team$))!.id;

    await firstValueFrom(
      this.teamService.delete({
        teamId: teamId,
      })
    );

    await this.router.navigate(['/']);
  }

  public async onSaveTeam() {
    if (this.form.invalid) {
      this.markAllFieldsAsTouched(this.form);
      return;
    }

    const teamId = (await firstValueFrom(this.team$))!.id;

    await firstValueFrom(
      this.teamService.update({
        teamId: teamId,
        name: this.form.controls.name.value || undefined,
        city: this.form.controls.city.value || undefined,
        isMixTeam: this.form.controls.isMixTeam.value || undefined,
        trainingTime: this.form.controls.trainingTime.value || undefined,
        aboutUs: this.form.controls.aboutUs.value || undefined,
        contacts:
          this.form.controls.contacts.value.filter(
            (item): item is string => item !== null && item !== ''
          ) || [],
      })
    );

    await this.teamDataService.reloadTeamDetails();
  }

  private markAllFieldsAsTouched(form: FormGroup): void {
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
