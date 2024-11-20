import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonColorEnum, ButtonSizeEnum } from '../../../infrastructure/button-style/button-style.enum';

import { ButtonComponent, ScrollToTopComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tournament-bottom-bar',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ButtonComponent,
    ScrollToTopComponent,
    TranslatePipe
  ],
  templateUrl: './tournament-bottom-bar.component.html',
  styleUrl: './tournament-bottom-bar.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentBottomBarComponent {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonSizeEnum = ButtonSizeEnum;

  public readonly color = ButtonColorEnum.Primary;
  public readonly size = ButtonSizeEnum.FullWidth;
}
