import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-info-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconInfoCircleComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 102 102">
  <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M59,86H41V36h18V86z M50,31L50,31&#10;&#9;c-5.8,0-9.4-3.8-9.4-8.6c0-5.1,3.7-8.7,9.4-8.7s9.3,3.6,9.4,8.7C59.4,27.1,55.7,31,50,31z"/>
</svg>`;
}
