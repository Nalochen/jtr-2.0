import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent, ScrollToTopComponent, ButtonColorEnum, ButtonTypeEnum } from '../../../ui-shared';
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
  public ButtonTypeEnum = ButtonTypeEnum;
  public ButtonColorEnum = ButtonColorEnum;
}
