import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';
import { FormControl, FormGroup } from '@angular/forms';
import {
  EditTeamForm
} from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'team-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, InputSwitchModule, InputTextModule],
  templateUrl: './team-header.component.html',
  styleUrl: './team-header.component.less',
})
export class TeamHeaderComponent {
  @Input() public form!: FormGroup<EditTeamForm>;

  public onInputSwitchChange = (event: Event) => {
    console.log('onInputSwitchChange', event);
  }
}
