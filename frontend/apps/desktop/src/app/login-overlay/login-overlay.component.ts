import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { loginFormControl } from '@jtr/business-domain/user';
import { isEmail } from '@jtr/business-domain/user';

import { AuthService, LockType } from '../business-rules/auth/auth.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
} from '../ui-shared';
import { MinutesDiffPipe } from './minutes-diff.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { OverlayPanel } from 'primeng/overlaypanel';

export interface LoginAttemptResponse {
  lockType: LockType | undefined;
  lockedUntil: string | undefined;
}

@Component({
  selector: 'login-overlay',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TranslatePipe,
    MinutesDiffPipe,
  ],
  templateUrl: './login-overlay.component.html',
  styleUrl: './login-overlay.component.less',
})
export class LoginOverlayComponent {
  @Input() public loginOverlayPanel!: OverlayPanel;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonFunctionType = ButtonFunctionType;
  protected readonly LockType = LockType;
  protected readonly form = loginFormControl;

  constructor(private authService: AuthService) {}

  public loginAttemptResponse: LoginAttemptResponse | undefined;

  public forgotPassword(): void {
    this.loginOverlayPanel.hide();
    //do something
  }

  public async onSubmit(): Promise<void> {
    if (!this.form.valid) {
      this.markAllFieldsAsTouched(this.form);
      return;
    }

    const emailOrUsername = this.form.controls.emailOrUsername.value;

    const loginResponse = await this.authService.login({
      email: isEmail(emailOrUsername) ? emailOrUsername : null,
      username: isEmail(emailOrUsername) ? null : emailOrUsername,
      password: this.form.controls.password.value,
    });

    if (loginResponse.token === undefined) {
      this.loginAttemptResponse = {
        lockType: loginResponse.lockType,
        lockedUntil: loginResponse.lockedUntil,
      };
      return;
    }

    this.form.reset();

    this.loginOverlayPanel.hide();
  }

  private markAllFieldsAsTouched(form: FormGroup): void {
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
