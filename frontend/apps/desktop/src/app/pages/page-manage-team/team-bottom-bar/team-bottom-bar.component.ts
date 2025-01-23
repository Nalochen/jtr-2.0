import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { firstValueFrom } from 'rxjs';

import {
  EditTeamForm,
  TeamDataService,
} from '@jtr/business-domain/team';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TeamDataService, TeamService],
})
export class TeamBottomBarComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
  @Input() public teamId?: number;
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected isDeleteDialogVisible = false;

  constructor(
    private readonly teamService: TeamService,
    private readonly teamDataService: TeamDataService,
    private readonly router: Router,
  ) {}

  public onOpenDeleteDialog() {
    this.isDeleteDialogVisible = true;
  }

  public async onDeleteTeam() {
    if(!this.teamId) {
      return;
    }

    await firstValueFrom(
      this.teamService.delete({
        teamId: this.teamId,
      })
    );

    await this.router.navigate(['/']);
  }

  public async onSaveTeam() {
    if (this.form.invalid) {
      console.log(this.form);
      this.markAllFieldsAsTouched(this.form);
      return;
    }

    if(!this.teamId) {
      console.log('here');
      await firstValueFrom(
        this.teamService.create({
          name: this.form.controls.name.value,
          city: this.form.controls.city.value || undefined,
          isMixTeam: this.form.controls.isMixTeam.value,
          trainingTime: this.form.controls.trainingTime.value || undefined,
          aboutUs: this.form.controls.aboutUs.value || undefined,
          contacts: this.form.controls.contacts.value.filter(
            (item): item is string => item !== null && item !== ''
          ) || [],
        })
      )
    } else {
      await firstValueFrom(
        this.teamService.update({
          teamId: this.teamId,
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
