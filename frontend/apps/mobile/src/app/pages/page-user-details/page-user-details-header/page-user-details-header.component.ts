import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

import { UserData } from '@jtr/data-domain/store';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
  InfoButtonComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'page-user-details-header',
  imports: [
    CommonModule,
    ButtonComponent,
    InfoButtonComponent,
    TranslatePipe,
    NgOptimizedImage,
  ],
  templateUrl: './page-user-details-header.component.html',
  styleUrl: './page-user-details-header.component.less',
})
export class PageUserDetailsHeaderComponent {
  public readonly user = input.required<UserData>();

  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonColorEnum = ButtonColorEnum;
}
