import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { loginFormControl } from '../business-domain/login/login-form.control';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, ButtonColorEnum, ButtonTypeEnum } from '../ui-shared';

@Component({
  selector: 'login-overlay',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
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
