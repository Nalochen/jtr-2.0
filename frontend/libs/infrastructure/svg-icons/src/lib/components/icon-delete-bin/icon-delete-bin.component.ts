import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-delete-bin',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDeleteBinComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder'  viewBox="0 0 81.5 93">
    <path d="M48.7 75.3H53c1.2 0 2.2-1 2.2-2.2V34.2c0-1.2-1-2.2-2.2-2.2h-4.3c-1.2 0-2.2 1-2.2 2.2v38.9c0 1.2 1 2.2 2.2
    2.2zm29.5-60.5H63.4L57.2 4.6C55.6 2 52.8.4 49.8.4H31.7c-3 0-5.9 1.6-7.4 4.2l-6.1 10.2H3.3c-1.6 0-2.9 1.3-2.9 2.9v2.9c0
    1.6 1.3 2.9 2.9 2.9h2.9V84c0 4.8 3.9 8.6 8.6 8.6h51.9c4.8 0 8.6-3.9 8.6-8.6V23.4h2.9c1.6 0 2.9-1.3 2.9-2.9v-2.9c0-1.5-1.3-2.8-2.9-2.8zM31.4 9.5c.2-.3.5-.5.9-.5h16.9c.4
    0 .7.2.9.5l3.1 5.2h-25l3.2-5.2zm35.3 74.4H14.8V23.4h51.9v60.5zm-38.2-8.6h4.3c1.2 0 2.2-1 2.2-2.2V34.2c0-1.2-1-2.2-2.2-2.2h-4.3c-1.2 0-2.2 1-2.2 2.2v38.9c0 1.2 1 2.2 2.2 2.2z"/>
</svg>`;
}
