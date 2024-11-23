import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { loginFormControl } from '../../../../../libs/business-domain/login/src/lib/form-controls/login-form.control';
import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum, ButtonFunctionType } from '../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { isEmail } from '../../../../../libs/business-domain/login/src/lib/rules/is-email.rule';
import { AuthService } from '../business-rules/auth/auth.service';
import { Router } from '@angular/router';

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
  protected readonly ButtonFunctionType = ButtonFunctionType;
  protected readonly form = loginFormControl;

  constructor(private authService: AuthService, private router: Router) {}

  public onSubmit(): void {
    if (!this.form.valid) {
      this.markAllFieldsAsTouched(this.form);
      return;
    }

    if (this.form.controls.password.value) {
      if (isEmail(this.form.controls.emailOrUsername.value)) {
        this.authService.login({
          email: this.form.controls.emailOrUsername.value,
          username: null,
          password: this.form.controls.password.value
        });
      } else {
        this.authService.login({
          email: null,
          username: this.form.controls.emailOrUsername.value,
          password: this.form.controls.password.value
        });
      }
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
