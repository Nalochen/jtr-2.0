import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-tick-circle-outline',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTickCircleOutlineComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg viewBox="0 0 100 100">
    <circle r="45%" cx="50%" cy="50%" fill="#color-placeholder"/>
    <path fill="white" d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M39.9,77.3L13.6,51.1l10.9-10.9
l15.3,15.3l32.8-32.8l10.9,10.9L39.9,77.3z"/>
    <circle r="47%" cx="50%" cy="50%" stroke="#color-placeholder" fill="transparent" stroke-width="5"/>
</svg>
`;
}
