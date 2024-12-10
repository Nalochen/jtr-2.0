import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { AuthService, LockType } from '../../business-rules/auth/auth.service';

import { loginFormControl } from '../../../../../../libs/business-domain/login/src/lib/form-controls/login-form.control';
import { isEmail } from '../../../../../../libs/business-domain/login/src/lib/rules/is-email.rule';
import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
  InfoButtonComponent,
} from '../../ui-shared';
import { MinutesDiffPipe } from './minutes-diff.pipe';
import { PageLoginHeaderComponent } from './page-login-header/page-login-header.component';
import { TranslatePipe } from '@ngx-translate/core';

export interface LoginAttemptResponse {
  lockType: LockType | undefined;
  lockedUntil: string | undefined;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    InfoButtonComponent,
    ButtonComponent,
    PageLoginHeaderComponent,
    TranslatePipe,
    MinutesDiffPipe,
  ],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoginComponent {
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonFunctionType = ButtonFunctionType;
  protected readonly LockType = LockType;
  protected readonly form = loginFormControl;

  constructor(private authService: AuthService, private router: Router) {}

  public loginAttemptResponse: LoginAttemptResponse | undefined;

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

    this.router.navigate(['/tournament-overview']);
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
