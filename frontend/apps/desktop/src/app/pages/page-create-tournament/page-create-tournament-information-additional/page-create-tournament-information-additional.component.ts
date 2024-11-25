import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import {
  RegistrationInformationForm
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';

@Component({
  selector: 'page-create-tournament-information-additional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-create-tournament-information-additional.component.html',
  styleUrl: './page-create-tournament-information-additional.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateTournamentInformationAdditionalComponent {
  @Input() form!: FormControl<string | null>;
}
