import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  AccommodationTypeEnum,
  TournamentFoodEveningEnum,
  TournamentFoodGastroEnum,
  TournamentFoodMorningEnum,
  TournamentFoodNoonEnum,
} from '@jtr/data-domain/tournament-data';

import { AccommodationInformationForm } from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { ButtonComponent, DataContainerRowComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateTournamentInformationAccommodationComponent {
  @Input() public form!: FormGroup<AccommodationInformationForm>;

  public readonly accommodationTypeOptions = [
    { label: 'camping', value: AccommodationTypeEnum.CAMPING },
    { label: 'gym', value: AccommodationTypeEnum.GYM },
    { label: 'none', value: AccommodationTypeEnum.NONE },
    { label: 'other', value: AccommodationTypeEnum.OTHER },
  ];

  public readonly breakfastAvailabilityOptions = Object.values(
    TournamentFoodMorningEnum
  );
  public readonly lunchAvailabilityOptions = Object.values(
    TournamentFoodNoonEnum
  );
  public readonly dinnerAvailabilityOptions = Object.values(
    TournamentFoodEveningEnum
  );
  public readonly gastronomyAvailabilityOptions = Object.values(
    TournamentFoodGastroEnum
  );
}
