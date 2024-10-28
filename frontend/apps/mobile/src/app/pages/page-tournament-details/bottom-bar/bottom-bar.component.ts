import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component } from '@angular/core';

import { ButtonColorEnum, ButtonSizeEnum } from '../../../infrastructure/button-style/button-style.enum';

import { ButtonComponent } from '../../../ui-shared';
import { ScrollToTopComponent } from '../../../ui-shared/lib/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'bottom-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent, ScrollToTopComponent],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.less',
})
export class BottomBarComponent {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonSizeEnum = ButtonSizeEnum;

  public readonly color = ButtonColorEnum.Primary;
  public readonly size = ButtonSizeEnum.FullWidth;
}
