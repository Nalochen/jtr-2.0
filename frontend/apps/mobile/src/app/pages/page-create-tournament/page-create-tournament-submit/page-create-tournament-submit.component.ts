import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'page-create-tournament-submit',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslatePipe],
  templateUrl: './page-create-tournament-submit.component.html',
  styleUrl: './page-create-tournament-submit.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateTournamentSubmitComponent {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionType = ButtonFunctionType;

  @Input() public formRef!: FormGroupDirective;

  public onManageTeams() {
    console.log('Manage Teams');
  }

  public onPublish(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.formRef.onSubmit(new Event('submit'));
  }
}
