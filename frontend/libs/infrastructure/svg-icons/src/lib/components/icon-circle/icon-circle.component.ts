import { Component, Input } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-circle',
  templateUrl: './icon-circle.component.html',
  styleUrls: ['./icon-circle.component.less'],
})
export class IconCircleComponent extends AbstractIconComponent {
  @Input()
  public innerScalePercent: number = 71; // about 1/sqrt(2)

  @Input() public fill: string = '#ffffff';

  protected override rawIcon: string = `<svg viewBox="0 0 70 70">
        <circle stroke="#stroke-color" fill="#fill-color" cx="35" cy="35" r="34" stroke-width="2"/>
    </svg>`;

  protected override replaceVariables(iconString: string): string {
    if (this.color) {
      iconString = iconString.replace(
        'stroke-color',
        this.getColor(this.color).substring(1)
      );
    }
    iconString = iconString.replace(
      'fill-color',
      this.getColor(this.fill).substring(1)
    );
    return iconString;
  }
}
