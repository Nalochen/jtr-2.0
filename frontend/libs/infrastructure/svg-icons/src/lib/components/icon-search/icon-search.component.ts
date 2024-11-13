import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-search',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSearchComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 100 100">
    <path d="M64.8,14.1C52.6-1.7,29.9-4.6,14.1,7.5S-4.6,42.4,7.5,58.2c11,14.2,30.3,17.9,45.6,9.9L77,99
c0.9,1.2,2.6,1.4,3.6,0.5l5.5-4.2c1.2-0.9,1.4-2.6,0.5-3.6L62.8,60.8C74.5,48,75.8,28.2,64.8,14.1z M52.9,57.8
c-11.9,9.2-29.1,7-38.3-5c-9.3-11.9-7-29.1,5-38.3c11.9-9.3,29.1-7,38.3,5C67.1,31.4,64.8,48.5,52.9,57.8z"/>
</svg>
`;
}
