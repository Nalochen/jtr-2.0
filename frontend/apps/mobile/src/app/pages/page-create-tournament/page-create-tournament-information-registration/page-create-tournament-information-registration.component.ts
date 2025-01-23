import { CommonModule, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

import {
  PricingTypeEnum,
  TournamentRegistrationProcedureTypeEnum,
} from '@jtr/data-domain/tournament-data';

import { RegistrationInformationForm } from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
  DataContainerRowComponent,
  InfoButtonComponent,
} from '../../../ui-shared';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';

export type TeamCountOption = { label: string; value: number };

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
    TranslatePipe,
    InputNumberModule,
  ],
  providers: [DatePipe],
  templateUrl:
    './page-create-tournament-information-registration.component.html',
  styleUrl: './page-create-tournament-information-registration.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateTournamentInformationRegistrationComponent
  implements OnInit, OnDestroy
{
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

  public registrationProcedureOptions: { label: string; value: TournamentRegistrationProcedureTypeEnum; }[] = [];
  public pricingTypeOptions: { label: string; value: PricingTypeEnum; }[] = [];

  constructor(
    private readonly datePipe: DatePipe,
    private readonly translateService: TranslateService
  ) {
    this.initializeRegistrationProcedureOptions();
    this.initializePricingTypeOptions();
  }

  public ngOnInit() {
    this.form.controls.teamCountField.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
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

  private initializeRegistrationProcedureOptions(): void {
    const options = [
      { label: 'first-come', value: TournamentRegistrationProcedureTypeEnum.FIRST_COME },
      { label: 'draw', value: TournamentRegistrationProcedureTypeEnum.LOTS },
      { label: 'other-procedure', value: TournamentRegistrationProcedureTypeEnum.OTHER },
    ];

    this.translateService.get('create-tournament').subscribe(translations => {
      this.registrationProcedureOptions = options.map(option => ({
        ...option,
        label: translations[option.label] || option.label
      }));
    });
  }

  private initializePricingTypeOptions(): void {
    const options = [
      { label: 'per-person', value: PricingTypeEnum.PER_PERSON },
      { label: 'per-team', value: PricingTypeEnum.PER_TEAM },
    ];

    this.translateService.get('create-tournament').subscribe(translations => {
      this.pricingTypeOptions = options.map(option => ({
        ...option,
        label: translations[option.label] || option.label
      }));
    });
  }

  public onOpenRegistrationNow() {
    const currentDateAndTime = this.datePipe.transform(
      new Date(),
      'yyyy-MM-dd'
    );
    this.form.controls.registrationStartDate.setValue(currentDateAndTime);
  }
}
