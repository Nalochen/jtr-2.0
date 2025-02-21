import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { firstValueFrom, Subject, takeUntil } from 'rxjs';

import { TournamentDataService } from '@jtr/business-domain/tournament';
import {
  TeamOverviewData,
  TournamentTeamData,
  TournamentTeamsData,
} from '@jtr/data-domain/store';

import { ParticipationService } from '../../business-rules/tournament/participation.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
  ChipComponent,
} from '../../ui-shared';
import { DropListComponent } from './drop-list/drop-list.component';
import { SubmitAreaComponent } from './submit-area/submit-area.component';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
  imports: [
    ButtonComponent,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    ChipComponent,
    CommonModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    DropListComponent,
    FormsModule,
    SubmitAreaComponent,
    TooltipModule,
    TranslatePipe,
  ],
  providers: [TournamentDataService],
  templateUrl: './page-manage-participating-teams.component.html',
  styleUrl: './page-manage-participating-teams.component.less',
})
export class PageManageParticipatingTeamsComponent implements OnDestroy {
  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly manageParticipationService: ParticipationService
  ) {
    this.teams$
      .pipe(takeUntil(this.destroy$))
      .subscribe((tournamentTeams: TournamentTeamsData | undefined) => {
        if (tournamentTeams) {
          const participatingTeams = tournamentTeams.participating;
          const waitingTeams = tournamentTeams.waiting;

          this.participatingTeams = participatingTeams;
          this.waitingTeams = waitingTeams;
          this.changeDetectorRef.markForCheck();
        }
      });
  }
  private readonly tournamentDataService = inject(TournamentDataService);

  public readonly teams$ = this.tournamentDataService.tournamentDetailsTeams$;
  public readonly tournament$ = this.tournamentDataService.tournamentDetails$;
  public readonly destroy$ = new Subject<void>();

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;

  public participatingTeams: TournamentTeamData[] = [];
  public waitingTeams: TournamentTeamData[] = [];

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public drop(event: CdkDragDrop<TeamOverviewData[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public async deleteTeam(
    index: number,
    isParticipating: boolean
  ): Promise<void> {
    await firstValueFrom(
      this.manageParticipationService.delete({
        tournamentId: 1,
        teamId: isParticipating
          ? this.participatingTeams[index].id
          : this.waitingTeams[index].id,
      })
    );

    await this.tournamentDataService.reloadTournamentDetails();
  }
}
