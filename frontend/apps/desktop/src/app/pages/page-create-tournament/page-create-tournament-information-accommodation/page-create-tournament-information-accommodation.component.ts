import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import {
  AccommodationInformationForm,
  RegistrationInformationForm
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';

@Component({
  selector: 'page-create-tournament-information-accommodation',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './page-create-tournament-information-accommodation.component.html',
  styleUrl: './page-create-tournament-information-accommodation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCreateTournamentInformationAccommodationComponent {
  @Input() form!: FormGroup<AccommodationInformationForm>;
}
