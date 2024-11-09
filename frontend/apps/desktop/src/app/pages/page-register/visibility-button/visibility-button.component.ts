import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonComponent, ButtonColorEnum, ButtonTypeEnum } from '../../../ui-shared';

@Component({
  selector: 'visibility-button',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, OverlayPanelModule, ButtonComponent],
  templateUrl: './visibility-button.component.html',
  styleUrl: './visibility-button.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisibilityButtonComponent {
  public visible = false;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  public toggleVisibility(value: boolean): void {
    if(this.visible === value) {
      return;
    }
    this.visible = value;
  }
}
