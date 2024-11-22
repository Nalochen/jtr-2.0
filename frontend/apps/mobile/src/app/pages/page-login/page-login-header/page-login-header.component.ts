import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../../ui-shared';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'page-login-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, OverlayPanelModule, ButtonComponent],
  templateUrl: './page-login-header.component.html',
  styleUrl: './page-login-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoginHeaderComponent {
}
