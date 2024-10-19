import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { Color } from '../../models/color.model';
import { CommonModule } from '@angular/common';

const iconCircle = `<svg fill="#fill-color" viewBox="0 0 100 100">
    <circle r="45%" cx="50%" cy="50%" fill="#tick-color" stroke-width="10"/>
    <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M39.9,77.3L13.6,51.1l10.9-10.9
l15.3,15.3l32.8-32.8l10.9,10.9L39.9,77.3z"/>
</svg>`;

@Component({
  selector: 'svg-icon-tick-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTickCircleComponent extends AbstractIconComponent {
  @Input() public tickColor: Color = '#ffffff';

  protected override rawIcon: string = iconCircle;

  protected override replaceVariables(iconString: string): string {
    if (this.color) {
      iconString = iconString.replace(
        'fill-color',
        this.getColor(this.color).substring(1)
      );
    }
    iconString = iconString.replace(
      'tick-color',
      this.getColor(this.tickColor).substring(1)
    );
    return iconString;
  }
}
