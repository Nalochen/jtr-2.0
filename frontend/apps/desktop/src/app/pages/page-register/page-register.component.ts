import {CommonModule} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { registerForm } from '../../../../../../libs/business-domain/register/src/lib/form-controls/register-form.control';
import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum,InfoButtonComponent } from '../../ui-shared';
import { VisibilityButtonComponent } from './visibility-button/visibility-button.component';


@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, InfoButtonComponent, ButtonComponent, VisibilityButtonComponent],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageRegisterComponent {
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly form = registerForm;

  public onSubmit(): void {
    if (!this.form.valid) {
      console.log(this.form.controls.password.errors);
    }
  }
}
