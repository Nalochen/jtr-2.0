import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonColorEnum, ButtonTypeEnum, ChipComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'header',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ChipComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
}
