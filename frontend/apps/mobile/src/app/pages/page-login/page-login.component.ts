import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { ButtonComponent, InfoButtonComponent, ButtonTypeEnum, ButtonColorEnum, ButtonFunctionType } from '../../ui-shared';
import { PageLoginHeaderComponent } from './page-login-header/page-login-header.component';
import {
  loginFormControl
} from '../../../../../../libs/business-domain/login/src/lib/form-controls/login-form.control';

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

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonFunctionType = ButtonFunctionType;
  protected readonly form = loginFormControl;

  public onSubmit(): void {
    if (this.form.valid) {
      console.log('Form is valid');
    }
  }
}
