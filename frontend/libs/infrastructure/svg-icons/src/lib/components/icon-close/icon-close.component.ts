import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-close',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloseComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 100 100">
  <polygon
    points="89.7,0 50,39.6 10.3,0 0,10.3 39.6,50 0,89.7 10.3,100 50,60.4 89.7,100 100,89.7 60.4,50 100,10.3   "
  />
</svg>`;
}
