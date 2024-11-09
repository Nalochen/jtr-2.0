import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonComponent } from '../button/button.component';
import { ButtonTypeEnum } from '../button/enums/type.enum';


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
}

