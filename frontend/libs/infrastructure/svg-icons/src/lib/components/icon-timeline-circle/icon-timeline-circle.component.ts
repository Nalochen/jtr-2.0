import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-timeline-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTimelineCircleComponent extends AbstractIconComponent {
  @Input() public outline = false;

  protected override rawIcon = `<svg viewBox="0 0 100 100">
    <circle cx="49.8" cy="49.9" r="45" stroke-width="10" stroke="#outline-color" fill="transparent" />
    <path fill="#inner-circle-color" d="M49.8 79.9c-16.6 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30c0 16.5-13.4 29.9-30 30z"/>
    </svg>`;

  protected override replaceVariables(iconString: string): string {
    if (!this.color) {
      return iconString;
    }

    iconString = iconString.replace(
      'outline-color',
      this.getColor(this.color).substring(1)
    );

    iconString = iconString.replace(
      'inner-circle-color',
      this.getColor(this.outline ? 'transparent' : this.color).substring(1)
    );
    return iconString;
  }
}
