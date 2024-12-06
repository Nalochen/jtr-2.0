import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';
import { ButtonTypeEnum, ButtonColorEnum, ChipComponent } from '../../../ui-shared';


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
  public isClicked = input.required<boolean>();
  public readonly filterNotPayed = output<boolean>();


  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;

  public onFilterNotPayed() {

  }
}
