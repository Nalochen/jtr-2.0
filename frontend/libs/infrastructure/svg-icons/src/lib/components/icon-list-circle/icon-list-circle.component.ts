import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-list-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconListCircleComponent extends AbstractIconComponent {
  @Input() public content: string = '1';

  protected override rawIcon: string = `<svg viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
        <g>
            <circle r="45%" cx="50%" cy="50%" fill='#color-placeholder'/>
            <text fill="white" x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="5rem"
                  font-family="Arial, sans-serif">content
            </text>
        </g>
    </svg>`;

  protected override replaceVariables(iconString: string): string {
    iconString = super.replaceVariables(iconString);
    iconString = iconString.replace('content', this.content);

    return iconString;
  }
}
