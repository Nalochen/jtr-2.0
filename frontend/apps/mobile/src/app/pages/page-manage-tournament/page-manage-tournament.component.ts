import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, inject,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { TournamentDataService } from '@jtr/business-domain/tournament';
import { EmailRecipientEnum } from '@jtr/data-domain/tournament-data';
import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
  EditorComponent,
} from '../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { TeamDataService } from '@jtr/business-domain/team';

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
  providers: [TournamentDataService, TeamDataService],
  templateUrl: './page-manage-tournament.component.html',
  styleUrl: './page-manage-tournament.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageManageTournamentComponent implements OnInit, OnDestroy {
  private readonly tournamentDataService = inject(TournamentDataService);
  private readonly teamsDataService = inject(TeamDataService);
  public readonly tournament$ = this.tournamentDataService.tournamentDetails$;
  public readonly teams$ = this.teamsDataService.teams$;

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

  constructor(
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