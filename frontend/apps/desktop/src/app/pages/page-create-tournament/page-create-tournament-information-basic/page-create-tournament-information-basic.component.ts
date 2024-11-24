import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataContainerRowComponent, InfoButtonComponent } from '../../../ui-shared';
import { InputTextModule } from 'primeng/inputtext';
import {
  BasicInformationForm
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'page-tournament-information-basic',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerRowComponent,
    InputTextModule,
    ReactiveFormsModule,
    InfoButtonComponent
  ],
  templateUrl: './page-create-tournament-information-basic.component.html',
  styleUrl: './page-create-tournament-information-basic.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTournamentInformationBasicComponent {
  @Input() form!: FormGroup<BasicInformationForm>;
}
