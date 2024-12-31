import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { EditTeamForm, TeamDataService, teamDetailsSelector } from '@jtr/business-domain/team';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { TeamData } from '@jtr/data-domain/store';
import { TeamService } from '../../../business-rules/team/team.service';

@Component({
  selector: 'team-bottom-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent, TranslatePipe],
  providers: [
    TeamDataService, TeamService
  ],
  templateUrl: './team-bottom-bar.component.html',
  styleUrl: './team-bottom-bar.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamBottomBarComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  @SingletonGetter()
  public get team$(): Observable<TeamData | null> {
    return this.store$.select(teamDetailsSelector);
  }

  constructor(
    private readonly store$: Store,
    private readonly teamService: TeamService,
    private readonly teamDataService: TeamDataService
  ) {}

  public onDeleteTeam() {
    window.alert('Delete team');
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
        contacts: this.form.controls.contacts.value.filter((item): item is string => item !== null && item !== "") || [],
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
