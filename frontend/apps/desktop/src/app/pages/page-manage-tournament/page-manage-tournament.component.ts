import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import {
  tournamentDetailsSelector,
  tournamentDetailsTeamsSelector,
} from '@jtr/business-domain/tournament';
import { TournamentData, TournamentTeamsData } from '@jtr/data-domain/store';
import { EmailRecipientEnum } from '@jtr/data-domain/tournament-data';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
  EditorComponent,
} from '../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ReactiveFormsModule,
    EditorComponent,
    ButtonComponent,
    InputTextModule,
  ],
  templateUrl: './page-manage-tournament.component.html',
  styleUrl: './page-manage-tournament.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageManageTournamentComponent implements OnInit, OnDestroy {
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonFunctionTypeEnum = ButtonFunctionType;
  protected readonly EmailRecipientEnum = EmailRecipientEnum;
  private readonly destroy$ = new Subject<void>();
  protected tournamentId: number | null = null;

  public readonly form = new FormGroup<{
    mail: FormGroup<{
      subject: FormControl<string | null>;
      text: FormControl<string | null>;
    }>;
    teams: FormControl<EmailRecipientEnum | null>;
  }>({
    mail: new FormGroup<{
      subject: FormControl<string | null>;
      text: FormControl<string | null>;
    }>({
      subject: new FormControl<string | null>(null),
      text: new FormControl<string | null>(null),
    }),
    teams: new FormControl<EmailRecipientEnum | null>(null),
  });

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData | null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  @SingletonGetter()
  public get teams$(): Observable<TournamentTeamsData | undefined> {
    return this.store$.select(tournamentDetailsTeamsSelector);
  }

  constructor(
    private store$: Store,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });

    this.tournament$.pipe(takeUntil(this.destroy$)).subscribe((tournament) => {
      if (tournament) {
        this.tournamentId = tournament.id;
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit(): void {
    window.alert('Send email');
  }

  public onManageTeams(): void {
    window.alert('Manage teams');
  }

  public onEnterResults(): void {
    window.alert('Enter results');
  }

  public onEditInfos(): void {
    window.open(
      `manage-tournament/tournament-information/${this.tournamentId}`,
      '_self'
    );
  }
}
