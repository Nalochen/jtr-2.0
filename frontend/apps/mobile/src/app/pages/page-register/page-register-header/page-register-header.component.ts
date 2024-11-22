import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum } from '../../../ui-shared';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'page-register-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, OverlayPanelModule, ButtonComponent],
  templateUrl: './page-register-header.component.html',
  styleUrl: './page-register-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageRegisterHeaderComponent {
}
