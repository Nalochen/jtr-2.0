import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  RegistrationInformationForm
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { ButtonComponent, DataContainerRowComponent, InfoButtonComponent, ButtonTypeEnum, ButtonColorEnum } from '../../../ui-shared';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import {
  RegistrationProcedureEnum
} from '../../../../../../../libs/data-domain/tournament/enums/registration-procedure.enum';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Subject, takeUntil } from 'rxjs';
import { PricingTypeEnum } from '../../../../../../../libs/data-domain/tournament/enums/pricing-type.enum';

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
    ButtonComponent
  ],
  templateUrl:
    './page-create-tournament-information-registration.component.html',
  styleUrl: './page-create-tournament-information-registration.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCreateTournamentInformationRegistrationComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup<RegistrationInformationForm>;

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public destroy$ = new Subject<void>();

  public teamCountOptions: { label: string, value: number }[] = [
    { label: '6', value: 6 },
    { label: '8', value: 8 },
    { label: '12', value: 12 },
    { label: '16', value: 16 },
    { label: '20', value: 20 },
    { label: '24', value: 24 },
    { label: '32', value: 32 },
  ];

  public registrationProcedureOptions = [
    { label: RegistrationProcedureEnum.FIRST_COME_FIRST_SERVED, value: RegistrationProcedureEnum.FIRST_COME_FIRST_SERVED },
    { label: RegistrationProcedureEnum.DRAW, value: RegistrationProcedureEnum.DRAW },
    { label: RegistrationProcedureEnum.INVITATION, value: RegistrationProcedureEnum.INVITATION },
    { label: RegistrationProcedureEnum.OTHER, value: RegistrationProcedureEnum.OTHER },
  ];

  public pricingTypeOptions = [
    { label: PricingTypeEnum.PER_PERSON, value: PricingTypeEnum.PER_PERSON },
    { label: PricingTypeEnum.PER_TEAM, value: PricingTypeEnum.PER_TEAM },
  ];

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

  public ngOnDestroy() {}

  public onOpenRegistrationNow() {
    this.form.controls.registrationStart.setValue(new Date());
  }
}
