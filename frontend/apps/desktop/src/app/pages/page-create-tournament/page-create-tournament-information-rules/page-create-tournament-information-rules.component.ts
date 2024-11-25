import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  RulesInformationForm
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { DataContainerRowComponent, InfoButtonComponent } from '../../../ui-shared';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'page-create-tournament-information-rules',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataContainerRowComponent,
    InputTextModule,
    InputTextareaModule,
    InputSwitchModule,
    InfoButtonComponent,
    TranslatePipe
  ],
  templateUrl: './page-create-tournament-information-rules.component.html',
  styleUrl: './page-create-tournament-information-rules.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateTournamentInformationRulesComponent {
  @Input() form!: FormGroup<RulesInformationForm>;
}
