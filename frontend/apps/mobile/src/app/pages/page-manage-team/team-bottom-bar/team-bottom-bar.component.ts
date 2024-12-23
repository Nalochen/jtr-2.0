import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EditTeamForm, updateTeamDetailsData } from '@jtr/business-domain/team';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'team-bottom-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent, TranslatePipe],
  templateUrl: './team-bottom-bar.component.html',
  styleUrl: './team-bottom-bar.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamBottomBarComponent {
  @Input() public form!: FormGroup<EditTeamForm>;
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(private readonly store$: Store) {}

  public onDeleteTeam() {
    window.alert('Delete team');
  }

  public onSaveTeam() {
    if (this.form.invalid) {
      return;
    }
    this.store$.dispatch(updateTeamDetailsData({ teamDetails: this.form.value }));
  }
}
