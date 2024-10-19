import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-exclamationmark-circle-neutral',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconExclamationmarkCircleNeutralComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 100 100">
    <path d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90.32A40.32,40.32,0,1,1,90.32,50,40.3,40.3,0,0,1,
          50,90.32Zm8.47-21A8.47,8.47,0,1,1,50,60.89,8.48,8.48,0,0,1,58.47,69.35ZM42.06,26.73l1.37,27.42a2.43,2.43,
          0,0,0,2.42,2.3h8.3a2.43,2.43,0,0,0,2.42-2.3l1.37-27.42a2.42,2.42,0,0,0-2.42-2.54h-11A2.42,2.42,0,0,0,
          42.06,26.73Z"/>
</svg>`;
}
