import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import {
  RegistrationInformationForm
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { ButtonColorEnum,ButtonComponent, ButtonTypeEnum, DataContainerRowComponent, InfoButtonComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import {
  TournamentRegistrationProcedureEnum
} from '../../../../../../../libs/data-domain/tournament/enums/registration-procedure.enum';
import { PricingTypeEnum } from '../../../../../../../libs/data-domain/tournament/enums/pricing-type.enum';

export type TeamCountOption = { label: string, value: number };

@Component({
  selector: 'page-create-tournament-information-registration',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerRowComponent,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InfoButtonComponent,
    FormsModule,
    SelectButtonModule,
    ButtonComponent,
    DatePipe,
    TranslatePipe
  ],
  providers: [DatePipe],
  templateUrl:
    './page-create-tournament-information-registration.component.html',
  styleUrl: './page-create-tournament-information-registration.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCreateTournamentInformationRegistrationComponent implements OnInit, OnDestroy {
  @Input() public form!: FormGroup<RegistrationInformationForm>;

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public destroy$ = new Subject<void>();

  public teamCountOptions: TeamCountOption[] = [
    { label: '6', value: 6 },
    { label: '8', value: 8 },
    { label: '12', value: 12 },
    { label: '16', value: 16 },
    { label: '20', value: 20 },
    { label: '24', value: 24 },
    { label: '32', value: 32 },
  ];

  public registrationProcedureOptions = [
    { label: 'first come first served', value: TournamentRegistrationProcedureEnum.FIRST_COME },
    { label: 'draw', value: TournamentRegistrationProcedureEnum.LOTS },
    { label: 'other', value: TournamentRegistrationProcedureEnum.OTHER },
  ];

  public pricingTypeOptions = [
    { label: 'per Person', value: PricingTypeEnum.PER_PERSON },
    { label: 'per Team', value: PricingTypeEnum.PER_TEAM },
  ];

  constructor(private readonly datePipe: DatePipe) { }

  public ngOnInit() {
    this.form.controls.teamCountField.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      if (this.form.controls.teamCountField.value) {
        this.form.controls.teamCountButton.setValue(null);
        this.form.controls.teamCountButton.disable();
      } else {
        this.form.controls.teamCountButton.enable();
      }
    });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onOpenRegistrationNow() {
    const currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.form.controls.registrationStart.setValue(currentDateAndTime);
  }
}
