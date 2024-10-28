import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-attention',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAttentionComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg viewBox="0 0 115.0999984741211 102" fill='#color-placeholder'>
    <rect height="34.4" width="9.9" y="32" x="51.3"></rect>
    <path d="M56.5,73.9c-3.5,0-6.2,2.8-6.2,6.2c0,3.5,2.8,6.2,6.2,6.2s6.1-2.8,6.2-6.2C62.7,76.6,59.9,73.9,56.5,73.9z"></path>
    <path d="M112.5,93.3l-52.1-91C59.6,0.8,58,0,56.5,0s-3,0.8-3.9,2.3l-52,91c-1.7,3,0.4,6.7,3.9,6.7h104.1&#10;&#9;&#9;C112,100,114.2,96.3,112.5,93.3z M8.4,93.2L56.5,9.1l48.1,84.2L8.4,93.2L8.4,93.2z"></path>
</svg>`;
}
