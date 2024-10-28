import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-star',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconStarComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 100 100">
    <polygon points="50,0 35,33.6 0,38.2 25.7,63.6 19.1,100 50,82.1 80.9,100 74.3,63.6 100,38.2 65,33.6" />
</svg>`;

  protected override defaultColor = '#f6b800';
}
