import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'page-register-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    OverlayPanelModule,
    ButtonComponent,
    TranslatePipe,
  ],
  templateUrl: './page-register-header.component.html',
  styleUrl: './page-register-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageRegisterHeaderComponent {}
