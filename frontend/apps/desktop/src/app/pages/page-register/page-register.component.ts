import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../business-rules/auth/auth.service';

import { registerForm } from '../../../../../../libs/business-domain/register/src/lib/form-controls/register-form.control';
import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonTypeEnum,
  InfoButtonComponent,
} from '../../ui-shared';
import { VisibilityButtonComponent } from '../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    InfoButtonComponent,
    ButtonComponent,
    VisibilityButtonComponent,
    TranslatePipe,
  ],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageRegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonFunctionType = ButtonFunctionType;
  protected readonly form = registerForm;

  public onSubmit(): void {
    if (!this.form.valid) {
      this.markAllFieldsAsTouched(this.form);
      return;
    }

    this.authService.register({
      birthdate: this.form.controls.birthdate.value,
      city: this.form.controls.city.value,
      email: this.form.controls.email.value,
      isBirthdateVisible: this.form.controls.isBirthdateVisible.value,
      isCityVisible: this.form.controls.isCityVisible.value,
      isNameVisible: this.form.controls.isNameVisible.value,
      language: sessionStorage.getItem('language') || 'de',
      name: this.form.controls.name.value,
      password: this.form.controls.password.value,
      username: this.form.controls.username.value,
    });

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
