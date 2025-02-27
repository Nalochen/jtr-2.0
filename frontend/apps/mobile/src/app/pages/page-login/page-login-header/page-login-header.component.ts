import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'page-login-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    OverlayPanelModule,
    ButtonComponent,
    TranslatePipe,
  ],
  templateUrl: './page-login-header.component.html',
  styleUrl: './page-login-header.component.less',
})
export class PageLoginHeaderComponent {}
