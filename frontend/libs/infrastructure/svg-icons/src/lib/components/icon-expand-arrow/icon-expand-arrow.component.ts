import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-expand-arrow',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconExpandArrowComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 35 10">
    <rect x="1.06152" width="19.4849" height="4.10209" rx="2.05105" transform="rotate(15 1.06152 0)" />
    <rect x="15.1172" y="5.07812" width="19.4849" height="4.10209" rx="2.05105"
        transform="rotate(-15 15.1172 5.07812)" />
</svg>`;
}
