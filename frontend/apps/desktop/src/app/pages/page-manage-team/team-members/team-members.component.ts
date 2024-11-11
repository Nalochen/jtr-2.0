import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input} from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { FormGroup } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, DataContainerRowComponent],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.less',
})
export class TeamMembersComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
}
