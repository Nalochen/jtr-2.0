import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { tournamentDetailsSelector, tournamentDetailsTeamsSelector } from '@jtr/business-domain/tournament';
import { TournamentData, TournamentTeamsData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { ButtonColorEnum, ButtonComponent, ButtonFunctionType,ButtonTypeEnum } from '../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ButtonComponent,
    ReactiveFormsModule,
    InputNumberModule
  ],
  templateUrl: './page-enter-results.component.html',
  styleUrl: './page-enter-results.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageEnterResultsComponent implements OnDestroy {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;
  public readonly form = new FormGroup<{
    teams: FormArray<FormGroup<{
      teamId: FormControl<number | null>,
      teamName: FormControl<string | null>,
      score: FormControl<number | null>
    }>>
  }>(
    {
      teams: new FormArray<FormGroup<{
        teamId: FormControl<number | null>,
        teamName: FormControl<string | null>,
        score: FormControl<number | null>
      }>>([])
    }
  );
  public destroy$ = new Subject<void>();

  @SingletonGetter()
  public get teams$(): Observable<TournamentTeamsData|undefined> {
    return this.store$.select(tournamentDetailsTeamsSelector);
  }

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData|null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  constructor(private store$: Store, private changeDetectorRef: ChangeDetectorRef) {
    this.teams$.pipe(takeUntil(this.destroy$)).subscribe(teams => {
      if (teams) {
        teams.participating.forEach(team => {
          this.form.controls.teams.push(new FormGroup({
            teamId: new FormControl<number | null>(team.id),
            teamName: new FormControl<string | null>(team.name),
            score: new FormControl<number | null>(null)
          }));
        });
        this.changeDetectorRef.markForCheck();
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onImport(): void {
    window.alert('Results imported');
  }

  public onSubmit(): void {
    window.alert('Results submitted');
  }
}
