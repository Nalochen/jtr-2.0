import {CommonModule} from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  EditUserForm,
} from '@jtr/business-domain/user';
import { FormGroup } from '@angular/forms';
import { ButtonComponent, ButtonTypeEnum, ButtonColorEnum, InfoButtonComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  standalone: true,
  selector: 'page-user-details-header',
  imports: [
    CommonModule,
    ButtonComponent,
    InfoButtonComponent,
    TranslatePipe
  ],
  templateUrl: './page-user-details-header.component.html',
  styleUrl: './page-user-details-header.component.less',
})
export class PageUserDetailsHeaderComponent {
  @Input() public form!: FormGroup<EditUserForm>;
  @Input() public isLoggedIn$!: boolean;

  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonColorEnum = ButtonColorEnum;

  public onChangeProfilePicture() {
    window.alert('Change logo');
  }
}
