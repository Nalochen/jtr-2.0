import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../business-rules/auth/auth.service';

import {
  loginFormControl
} from '../../../../../../libs/business-domain/login/src/lib/form-controls/login-form.control';
import { isEmail } from '../../../../../../libs/business-domain/login/src/lib/rules/is-email.rule';
import { ButtonColorEnum, ButtonComponent, ButtonFunctionType,ButtonTypeEnum, InfoButtonComponent } from '../../ui-shared';
import { PageLoginHeaderComponent } from './page-login-header/page-login-header.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    InfoButtonComponent,
    ButtonComponent,
    PageLoginHeaderComponent,
    TranslatePipe
  ],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoginComponent {
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

    if (!this.form.controls.password.value) { return; }

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
