import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

import { TeamData, TournamentTeamsData } from '@jtr/data-domain/store';

import { AuthService } from '../../../business-rules/auth/auth.service';
import { ManageParticipationService } from '../../../business-rules/tournament/manage-participation.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'tournament-registration',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ButtonComponent,
    TranslatePipe,
    DialogModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './tournament-registration.component.html',
  styleUrl: './tournament-registration.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentRegistrationComponent implements OnInit, OnDestroy {
  @Input() public tournamentId!: number;
  @Input() public registrationStartDate!: string;
  @Input() public registeredTeams!: TournamentTeamsData;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  protected dialogVisible = false;
  protected teams: TeamData[] = [];
  protected selectedTeam: TeamData | null = null;
  public destroy$ = new Subject<void>();

  constructor(
    private readonly manageParticipationService: ManageParticipationService,
    private readonly authService: AuthService
  ) {}

  public ngOnInit() {
    this.authService
      .userAdminTeams()
      .pipe(takeUntil(this.destroy$))
      .subscribe((teams) => {
        const registeredIds = new Set([
          ...this.registeredTeams.waiting.map((team) => team.id),
          ...this.registeredTeams.participating.map((team) => team.id),
        ]);

        this.teams = teams.filter((team) => !registeredIds.has(team.id));
      });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onShowDialog(): void {
    this.dialogVisible = true;
  }

  public onRegistrationClick(): void {
    this.dialogVisible = false;
    if (this.selectedTeam) {
      this.manageParticipationService.create({
        tournamentId: this.tournamentId,
        teamId: this.selectedTeam?.id,
      });
    }
  }
}
