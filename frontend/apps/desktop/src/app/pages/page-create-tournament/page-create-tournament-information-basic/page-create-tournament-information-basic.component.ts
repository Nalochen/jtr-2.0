import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  BasicInformationForm
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { DataContainerRowComponent, InfoButtonComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'page-tournament-information-basic',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerRowComponent,
    InputTextModule,
    ReactiveFormsModule,
    InfoButtonComponent,
    TranslatePipe
  ],
  templateUrl: './page-create-tournament-information-basic.component.html',
  styleUrl: './page-create-tournament-information-basic.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTournamentInformationBasicComponent {
  @Input() public form!: FormGroup<BasicInformationForm>;
}
