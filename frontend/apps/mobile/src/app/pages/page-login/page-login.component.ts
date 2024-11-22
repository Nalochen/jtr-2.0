import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { registerForm } from '../../../../../../libs/business-domain/register/src/lib/form-controls/register-form.control';
import { AuthService } from '../../business-rules/auth/auth.service';
import { ButtonComponent, InfoButtonComponent, ButtonTypeEnum, ButtonColorEnum } from '../../ui-shared';
import { PageLoginHeaderComponent } from './page-login-header/page-login-header.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    InfoButtonComponent,
    ButtonComponent,
    PageLoginHeaderComponent,
  ],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly form = registerForm;

  public onSubmit(): void {
    if (!this.form.valid) {
      this.markAllFieldsAsTouched(this.form);
      return;
    }

    this.authService.register(this.form.controls.username.getRawValue(), this.form.controls.password.getRawValue());

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
