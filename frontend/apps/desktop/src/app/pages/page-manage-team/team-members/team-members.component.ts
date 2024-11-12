import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, DataContainerRowComponent, ReactiveFormsModule],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamMembersComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
}
