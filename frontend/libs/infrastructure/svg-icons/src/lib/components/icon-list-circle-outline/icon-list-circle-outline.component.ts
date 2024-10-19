import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconListCircleComponent } from '../icon-list-circle/icon-list-circle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-list-circle-outline',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconListCircleOutlineComponent extends IconListCircleComponent {
  protected override rawIcon: string = `<svg viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
        <g>
            <circle r="45%" cx="50%" cy="50%" fill='white' stroke="#color-placeholder" stroke-width="5%"/>
            <text fill="#color-placeholder" x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="5rem"
                  font-family="Arial, sans-serif">content
            </text>
        </g>
    </svg>`;
}
