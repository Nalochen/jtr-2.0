import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EditTeamForm } from '../../../../../../../libs/business-domain/team/src/lib/form-controls/edit-team-form.control';
import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'team-bottom-bar',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ButtonComponent,
    TranslatePipe
  ],
  templateUrl: './team-bottom-bar.component.html',
  styleUrl: './team-bottom-bar.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
