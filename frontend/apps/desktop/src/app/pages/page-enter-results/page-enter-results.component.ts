import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { firstValueFrom, Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import {
  tournamentDetailsSelector,
  tournamentDetailsTeamsSelector,
} from '@jtr/business-domain/tournament';
import { TournamentData, TournamentTeamsData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { EnterResultService } from '../../business-rules/enter-result/enter-result.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
} from '../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ButtonComponent,
    ReactiveFormsModule,
    InputNumberModule,
  ],
  templateUrl: './page-enter-results.component.html',
  styleUrl: './page-enter-results.component.less',
})
export class PageEnterResultsComponent implements OnDestroy {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;
  public readonly form = new FormGroup<{
    teams: FormArray<
      FormGroup<{
        teamId: FormControl<number>;
        teamName: FormControl<string>;
        placement: FormControl<number | null>;
      }>
    >;
  }>({
    teams: new FormArray<
      FormGroup<{
        teamId: FormControl<number>;
        teamName: FormControl<string>;
        placement: FormControl<number | null>;
      }>
    >([]),
  });
  public destroy$ = new Subject<void>();

  @SingletonGetter()
  public get teams$(): Observable<TournamentTeamsData | undefined> {
    return this.store$.select(tournamentDetailsTeamsSelector);
  }

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData | null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  constructor(
    private store$: Store,
    private changeDetectorRef: ChangeDetectorRef,
    private enterResultService: EnterResultService
  ) {
    this.teams$.pipe(takeUntil(this.destroy$)).subscribe((teams) => {
      if (teams) {
        teams.participating.forEach((team) => {
          this.form.controls.teams.push(
            new FormGroup({
              teamId: new FormControl<number>(team.id, {
                nonNullable: true,
                validators: [Validators.required],
              }),
              teamName: new FormControl<string>(team.name, {
                nonNullable: true,
                validators: [Validators.required],
              }),
              placement: new FormControl<number | null>(null, {
                nonNullable: true,
                validators: [Validators.required],
              }),
            })
          );
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

  public async onSubmit(): Promise<void> {
    const tournament = (await firstValueFrom(this.tournament$))!;

    const resultElements = this.form.controls.teams.controls.map(
      (teamControl) => ({
        teamId: teamControl.value.teamId!,
        placement: teamControl.value.placement!,
      })
    );

    await firstValueFrom(
      this.enterResultService.create({
        tournamentId: tournament.id,
        resultElements: resultElements,
      })
    );
  }
}
