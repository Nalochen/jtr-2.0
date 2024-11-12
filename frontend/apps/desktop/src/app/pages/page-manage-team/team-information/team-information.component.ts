import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TeamInformationAboutUsComponent } from '../team-information-about-us/team-information-about-us.component';
import { TeamInformationContactsComponent } from '../team-information-contacts/team-information-contacts.component';
import { TeamInformationTrainingComponent } from '../team-information-training/team-information-training.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';

@Component({
  selector: 'team-information',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TeamInformationTrainingComponent, TeamInformationContactsComponent, TeamInformationAboutUsComponent, ReactiveFormsModule],
  templateUrl: './team-information.component.html',
  styleUrl: './team-information.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamInformationComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
}