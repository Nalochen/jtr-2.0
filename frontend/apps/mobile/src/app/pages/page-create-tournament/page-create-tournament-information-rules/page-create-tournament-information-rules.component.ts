import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { RulesInformationForm } from '@jtr/business-domain/tournament';

import {
  DataContainerRowComponent,
  InfoButtonComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

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
    TranslatePipe,
  ],
  templateUrl: './page-create-tournament-information-rules.component.html',
  styleUrl: './page-create-tournament-information-rules.component.less',
})
export class PageCreateTournamentInformationRulesComponent {
  @Input() public form!: FormGroup<RulesInformationForm>;
}
