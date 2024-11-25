import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  RegistrationInformationForm
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { DataContainerRowComponent } from '../../../ui-shared';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'page-create-tournament-information-additional',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataContainerRowComponent,
    InputTextareaModule
  ],
  templateUrl: './page-create-tournament-information-additional.component.html',
  styleUrl: './page-create-tournament-information-additional.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateTournamentInformationAdditionalComponent {
  @Input() form!: FormControl<string | null>;
}
