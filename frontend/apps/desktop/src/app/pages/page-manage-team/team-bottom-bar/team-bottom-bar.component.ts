import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EditTeamForm } from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';

@Component({
  selector: 'team-bottom-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent],
  templateUrl: './team-bottom-bar.component.html',
  styleUrl: './team-bottom-bar.component.less',
})
export class TeamBottomBarComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  public onDeleteTeam() {
    window.alert('Delete team');
  }

  public onSaveTeam() {
    window.alert(this.form.value);
  }
}
