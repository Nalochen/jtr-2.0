import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { tournamentDetailsSelector } from '@jtr/business-domain/tournament';
import { TournamentData, TournamentTeamData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent, ButtonTypeEnum, ButtonColorEnum, ButtonFunctionType } from '../../ui-shared';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ButtonComponent,
    DividerModule,
    TooltipModule
  ],
  templateUrl: './page-manage-participating-teams.component.html',
  styleUrl: './page-manage-participating-teams.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageManageParticipatingTeamsComponent implements OnDestroy {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;
  public readonly destroy$ = new Subject<void>()
  public readonly participatingTeams: TournamentTeamData[] = []
  public readonly waitingTeams: TournamentTeamData[] = []

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData|null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  constructor(private store$: Store, private changeDetectorRef: ChangeDetectorRef) {
    this.tournament$.pipe(takeUntil(this.destroy$)).subscribe((tournament) => {
      if (!!tournament) {
        this.participatingTeams.push(...tournament.teams.participating)
        this.waitingTeams.push(...tournament.teams.waiting)
      }
    })

    this.changeDetectorRef.markForCheck();
    console.log(this.participatingTeams)
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public sendEmail(): void {
    window.alert('sendMail')
  }

  public onSubmit(): void {
    window.alert('submit');
  }
}
