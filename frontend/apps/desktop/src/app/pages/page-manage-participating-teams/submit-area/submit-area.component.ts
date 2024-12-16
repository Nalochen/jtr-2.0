import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { firstValueFrom, Observable } from 'rxjs';

import { TeamDataService } from '@jtr/business-domain/team';
import { TournamentDataService } from '@jtr/business-domain/tournament';
import { TeamOverviewData, TournamentTeamData } from '@jtr/data-domain/store';

import { ManageParticipationService } from '../../../business-rules/tournament/manage-participation.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'submit-area',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ButtonComponent,
    DialogModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [TeamDataService],
  templateUrl: './submit-area.component.html',
  styleUrl: './submit-area.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitAreaComponent {
  constructor(
    private readonly tournamentDataService: TournamentDataService,
    private readonly manageParticipationService: ManageParticipationService
  ) {}
  private readonly teamDataService = inject(TeamDataService);

  public teams$: Observable<TeamOverviewData[]> = this.teamDataService.teams$;

  @Input() public tournamentId!: number;

  public addTeamVisible = false;
  public selectedTeam: TournamentTeamData | null = null;

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;

  public openAddTeamOverlay(): void {
    this.addTeamVisible = true;
  }

  public closeAddTeamOverlay(): void {
    this.addTeamVisible = false;
  }

  public async addTeam(): Promise<void> {
    if (!this.selectedTeam) {
      return;
    }

    await firstValueFrom(
      this.manageParticipationService.create({
        tournamentId: this.tournamentId,
        teamId: this.selectedTeam.id,
      })
    );

    await this.tournamentDataService.reloadTournamentDetails();
  }
}
