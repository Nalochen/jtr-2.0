import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { DataContainerRowComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'page-create-tournament-information-additional',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataContainerRowComponent,
    InputTextareaModule,
    TranslatePipe,
  ],
  templateUrl: './page-create-tournament-information-additional.component.html',
  styleUrl: './page-create-tournament-information-additional.component.less',
})
export class PageCreateTournamentInformationAdditionalComponent {
  @Input() public form!: FormControl<string | null>;
}
