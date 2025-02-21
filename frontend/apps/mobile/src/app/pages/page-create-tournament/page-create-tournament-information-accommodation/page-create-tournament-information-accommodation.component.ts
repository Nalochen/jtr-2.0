import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccommodationInformationForm } from '@jtr/business-domain/tournament';
import {
  AccommodationTypeEnum,
  TournamentFoodEveningEnum,
  TournamentFoodGastroEnum,
  TournamentFoodMorningEnum,
  TournamentFoodNoonEnum,
} from '@jtr/data-domain/tournament-data';

import { ButtonComponent, DataContainerRowComponent } from '../../../ui-shared';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'page-create-tournament-information-accommodation',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerRowComponent,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    SelectButtonModule,
    ButtonComponent,
    DropdownModule,
    TranslatePipe,
  ],
  templateUrl:
    './page-create-tournament-information-accommodation.component.html',
  styleUrl: './page-create-tournament-information-accommodation.component.less',
})
export class PageCreateTournamentInformationAccommodationComponent {
  @Input() public form!: FormGroup<AccommodationInformationForm>;

  public accommodationTypeOptions: {
    label: string;
    value: AccommodationTypeEnum;
  }[] = [];
  public breakfastAvailabilityOptions: {
    label: string;
    value: TournamentFoodMorningEnum;
  }[] = [];
  public lunchAvailabilityOptions: {
    label: string;
    value: TournamentFoodNoonEnum;
  }[] = [];
  public dinnerAvailabilityOptions: {
    label: string;
    value: TournamentFoodEveningEnum;
  }[] = [];
  public gastronomyAvailabilityOptions: {
    label: string;
    value: TournamentFoodGastroEnum;
  }[] = [];

  constructor(private readonly translateService: TranslateService) {
    this.initializeAccommodationTypeOptions();
    this.initializeBreakfastAvailabilityOptions();
    this.initializeLunchAvailabilityOptions();
    this.initializeDinnerAvailabilityOptions();
    this.initializeGastronomyAvailabilityOptions();
  }

  private initializeAccommodationTypeOptions(): void {
    const options = [
      { label: 'camping', value: AccommodationTypeEnum.CAMPING },
      { label: 'gym', value: AccommodationTypeEnum.GYM },
      { label: 'none', value: AccommodationTypeEnum.NONE },
      { label: 'other-accommodation', value: AccommodationTypeEnum.OTHER },
    ];

    this.translateService.get('create-tournament').subscribe((translations) => {
      this.accommodationTypeOptions = options.map((option) => ({
        ...option,
        label: translations[option.label] || option.label,
      }));
    });
  }

  private initializeBreakfastAvailabilityOptions(): void {
    const options = [
      {
        label: 'food-morning-provided',
        value: TournamentFoodMorningEnum.PROVIDED,
      },
      { label: 'food-morning-no', value: TournamentFoodMorningEnum.NO },
    ];

    this.translateService.get('create-tournament').subscribe((translations) => {
      this.breakfastAvailabilityOptions = options.map((option) => ({
        ...option,
        label: translations[option.label] || option.label,
      }));
    });
  }

  private initializeLunchAvailabilityOptions(): void {
    const options = [
      { label: 'food-noon-provided', value: TournamentFoodNoonEnum.PROVIDED },
      { label: 'food-noon-snacks', value: TournamentFoodNoonEnum.SNACKS },
      { label: 'food-noon-no', value: TournamentFoodNoonEnum.NO },
    ];

    this.translateService.get('create-tournament').subscribe((translations) => {
      this.lunchAvailabilityOptions = options.map((option) => ({
        ...option,
        label: translations[option.label] || option.label,
      }));
    });
  }

  private initializeDinnerAvailabilityOptions(): void {
    const options = [
      {
        label: 'food-evening-provided',
        value: TournamentFoodEveningEnum.PROVIDED,
      },
      {
        label: 'food-evening-grill-provided',
        value: TournamentFoodEveningEnum.GRILL_AVAILABLE,
      },
      { label: 'food-evening-no', value: TournamentFoodEveningEnum.NO },
    ];

    this.translateService.get('create-tournament').subscribe((translations) => {
      this.dinnerAvailabilityOptions = options.map((option) => ({
        ...option,
        label: translations[option.label] || option.label,
      }));
    });
  }

  private initializeGastronomyAvailabilityOptions(): void {
    const options = [
      {
        label: 'food-gastro-on-the-course',
        value: TournamentFoodGastroEnum.ON_THE_COURSE,
      },
      { label: 'food-gastro-near', value: TournamentFoodGastroEnum.NEAR },
      { label: 'food-gastro-far', value: TournamentFoodGastroEnum.FAR },
      { label: 'food-gastro-no', value: TournamentFoodGastroEnum.NO },
    ];

    this.translateService.get('create-tournament').subscribe((translations) => {
      this.gastronomyAvailabilityOptions = options.map((option) => ({
        ...option,
        label: translations[option.label] || option.label,
      }));
    });
  }
}
