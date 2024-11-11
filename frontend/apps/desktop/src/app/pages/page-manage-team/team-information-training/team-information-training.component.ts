import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';

import { DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { FormGroup } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'team-training',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, DataContainerRowComponent, MatDividerModule, InputTextareaModule],
  templateUrl: './team-information-training.component.html',
  styleUrl: './team-information-training.component.less',
})
export class TeamInformationTrainingComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
}
