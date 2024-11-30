import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { tournamentDetailsSelector, tournamentDetailsTeamsSelector } from '@jtr/business-domain/tournament';
import { Store } from '@ngrx/store';
import { TournamentData, TournamentTeamsData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { InputComponent } from './input/input.component';
import { ButtonComponent, ButtonTypeEnum, ButtonColorEnum } from '../../ui-shared';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './page-enter-results.component.html',
  styleUrl: './page-enter-results.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageEnterResultsComponent implements OnDestroy{
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public destroy$ = new Subject<void>();

  @SingletonGetter()
  public get teams$(): Observable<TournamentTeamsData|undefined> {
    return this.store$.select(tournamentDetailsTeamsSelector);
  }

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData|null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  constructor(
    private store$: Store,
  ) {
    console.log(this.tournament$)
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
