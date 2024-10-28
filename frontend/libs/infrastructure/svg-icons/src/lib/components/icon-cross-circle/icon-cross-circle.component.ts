import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-cross-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCrossCircleComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 100 100">
  <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M81.7,69L69,81.7l-19-19l-19,19L18.3,69
l19-19l-19-19L31,18.3l19,19l19-19L81.7,31l-19,19L81.7,69z"/>
</svg>
`;

  protected override defaultColor = '#e30513';
}
