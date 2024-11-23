import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { loginFormControl } from '../../../../../libs/business-domain/login/src/lib/form-controls/login-form.control';
import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum } from '../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'login-overlay',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TranslatePipe
  ],
  templateUrl: './login-overlay.component.html',
  styleUrl: './login-overlay.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginOverlayComponent {
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly form = loginFormControl;

  public onSubmit(): void {
    if (this.form.valid) {
      console.log('Form is valid');
    }
  }
}
