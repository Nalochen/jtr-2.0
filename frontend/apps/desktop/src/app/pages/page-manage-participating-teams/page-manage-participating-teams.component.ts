import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { Observable, Subject, takeUntil, withLatestFrom } from 'rxjs';

import { Store } from '@ngrx/store';

import { TeamOverviewData, TournamentData, TournamentTeamData, TournamentTeamsData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent, ButtonTypeEnum, ButtonColorEnum, ButtonFunctionType, ChipComponent } from '../../ui-shared';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SubmitAreaComponent } from './submit-area/submit-area.component';
import { DropListComponent } from './drop-list/drop-list.component';
import { teamOverviewSelector } from '@jtr/business-domain/team';
import {
  TournamentDataService
} from '../../../../../../libs/business-domain/tournament/src/lib/services/tournament-data.service';

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
  templateUrl: './page-manage-participating-teams.component.html',
  styleUrl: './page-manage-participating-teams.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageManageParticipatingTeamsComponent implements OnDestroy {
  public readonly tournamentDetailsTeams$ = this.tournamentDataService.tournamentDetailsTeams$;

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;
  public readonly destroy$ = new Subject<void>()
  public participatingTeams: TournamentTeamData[] = []
  public waitingTeams: TournamentTeamData[] = []
  public filteredTeams: TeamOverviewData[] = [];

  @SingletonGetter()
  public get teams$(): Observable<TeamOverviewData[]> {
    return this.store$.select(teamOverviewSelector);
  }

  constructor(
    private readonly store$: Store,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly tournamentDataService: TournamentDataService
  ) {
    this.tournamentDetailsTeams$.pipe(
      withLatestFrom(this.teams$),
      takeUntil(this.destroy$)
    ).subscribe(([tournamentTeams, teams]: [TournamentTeamsData | undefined, TeamOverviewData[]]) => {
      if (!!tournamentTeams) {
        const participatingTeams = [...tournamentTeams.participating];
        const waitingTeams = [...tournamentTeams.waiting];

        this.participatingTeams = participatingTeams;
        this.waitingTeams = waitingTeams;
        this.changeDetectorRef.markForCheck();

        this.filteredTeams = teams.filter((team) => {
          return !participatingTeams.some((participatingTeam) => participatingTeam.id === team.id) &&
            !waitingTeams.some((waitingTeam) => waitingTeam.id === team.id);
        });
      }
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onFilterNotPayed() {
    //Action dispatchen die Daten im Store filtert
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
