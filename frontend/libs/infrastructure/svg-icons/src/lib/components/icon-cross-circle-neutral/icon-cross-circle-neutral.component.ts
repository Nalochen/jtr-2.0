import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-cross-circle-neutral',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCrossCircleNeutralComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 100 100">
    <path d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90.32A40.32,40.32,0,1,1,90.32,50,40.3,40.3,0,0,1,50,
    90.32ZM70.52,37.46,58,50,70.52,62.54a2.42,2.42,0,0,1,0,3.43L66,70.52a2.42,2.42,0,0,1-3.43,0L50,58,37.46,
    70.52a2.42,2.42,0,0,1-3.43,0L29.48,66a2.42,2.42,0,0,1,0-3.43L42,50,29.48,37.46a2.42,2.42,0,0,1,0-3.43L34,
    29.48a2.42,2.42,0,0,1,3.43,0L50,42,62.54,29.48a2.42,2.42,0,0,1,3.43,0L70.52,34a2.42,2.42,0,0,1,0,3.43Z"/>
</svg>`;
}
