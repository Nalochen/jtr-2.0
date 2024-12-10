import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

import {
  TournamentDataService
} from '@jtr/business-domain/tournament';
import { TournamentTeamData, TournamentTeamsData } from '@jtr/data-domain/store';

import { ButtonColorEnum, ButtonComponent, ButtonFunctionType, ButtonTypeEnum, ChipComponent } from '../../ui-shared';
import { DropListComponent } from './drop-list/drop-list.component';
import { HeaderComponent } from './header/header.component';
import { SubmitAreaComponent } from './submit-area/submit-area.component';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ButtonComponent,
    DividerModule,
    TooltipModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    DialogModule,
    DropdownModule,
    FormsModule,
    ChipComponent,
    HeaderComponent,
    SubmitAreaComponent,
    DropListComponent,
  ],
  providers: [
    TournamentDataService,
  ],
  templateUrl: './page-manage-participating-teams.component.html',
  styleUrl: './page-manage-participating-teams.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageManageParticipatingTeamsComponent implements OnDestroy {
  private readonly tournamentDataService = inject(TournamentDataService);
  public readonly tournamentDetailsTeams$ = this.tournamentDataService.tournamentDetailsTeams$;

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;
  public readonly destroy$ = new Subject<void>()
  public participatingTeams: TournamentTeamData[] = []
  public waitingTeams: TournamentTeamData[] = []

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.tournamentDetailsTeams$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((tournamentTeams: TournamentTeamsData | undefined) => {
      if (tournamentTeams) {
        const participatingTeams = [...tournamentTeams.participating];
        const waitingTeams = [...tournamentTeams.waiting];

        this.participatingTeams = participatingTeams;
        this.waitingTeams = waitingTeams;
        this.changeDetectorRef.markForCheck();
      }
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public drop(event: CdkDragDrop<TournamentTeamData[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  public deleteTeam(index: number, isParticipating: boolean): void {
    if (isParticipating) {
      this.participatingTeams.splice(index, 1);
    } else {
      this.waitingTeams.splice(index, 1);
    }
  }

  public save(): void {
    // API aufrufen
    // Weiterleiten
  }
}
