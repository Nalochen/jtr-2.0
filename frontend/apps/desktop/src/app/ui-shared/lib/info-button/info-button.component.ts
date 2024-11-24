import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy,Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { ButtonComponent } from '../button/button.component';
import { ButtonFunctionType } from '../button/enums/function-type.enum';
import { ButtonTypeEnum } from '../button/enums/type.enum';
import { OverlayPanelModule } from 'primeng/overlaypanel';


@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, OverlayPanelModule, ButtonComponent],
  selector: 'app-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfoButtonComponent {
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonFunctionType = ButtonFunctionType;
}

