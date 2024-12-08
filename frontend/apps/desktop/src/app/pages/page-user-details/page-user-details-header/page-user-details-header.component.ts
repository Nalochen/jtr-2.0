import {CommonModule} from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonComponent, ButtonTypeEnum, ButtonColorEnum, InfoButtonComponent } from '../../../ui-shared';
import { UserData } from '@jtr/data-domain/store';
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
  public readonly user = input.required<UserData>();

  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonColorEnum = ButtonColorEnum;
}
