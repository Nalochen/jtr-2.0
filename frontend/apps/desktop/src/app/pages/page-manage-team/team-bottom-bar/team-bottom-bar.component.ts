import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EditTeamForm, TeamDataService, teamDetailsSelector } from '@jtr/business-domain/team';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { firstValueFrom, Observable } from 'rxjs';
import { TeamService } from '../../../business-rules/team/team.service';
import { Router } from '@angular/router';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { TeamData } from '@jtr/data-domain/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'team-bottom-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent, TranslatePipe],
  templateUrl: './team-bottom-bar.component.html',
  styleUrl: './team-bottom-bar.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TeamService,
    TeamDataService,
  ]
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
    private readonly teamService: TeamService,
    private readonly teamDataService: TeamDataService,
    private readonly router: Router,
    private readonly store$: Store
  ) {}

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
}
