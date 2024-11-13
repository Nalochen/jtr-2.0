import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-arrow-square',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowSquareComponent extends AbstractIconComponent {
  protected override rawIcon =
    '<svg fill=\'#color-placeholder\' viewBox="0 0 50 50"><path d="M3 50a3 3 0 01-3-3V3a3 3 0 013-3h44a3 3 0 013 3v44a3 3 0 01-3 3zm5-25.5h9.9v17.85h12.8V24.5h10.75L24.6 7.65z"/></svg>';
}
