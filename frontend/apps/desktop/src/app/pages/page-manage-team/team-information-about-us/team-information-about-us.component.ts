import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { FormGroup } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'team-about-us',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerRowComponent, DataContainerComponent, InputTextareaModule],
  templateUrl: './team-information-about-us.component.html',
  styleUrl: './team-information-about-us.component.less',
})
export class TeamInformationAboutUsComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
}
