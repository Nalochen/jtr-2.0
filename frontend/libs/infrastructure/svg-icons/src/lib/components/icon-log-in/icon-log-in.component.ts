import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-log-in',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLogInComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 26 26">
        <g transform="translate(0, 0)">
        <g transform="translate(0, 0) rotate(0)">
        <path vector-effect="non-scaling-stroke" class="st0" d="M13,0C5.8,0,0,5.8,0,13s5.8,13,13,13s13-5.8,13-13S20.2,0,13,0z M13,24.4
            c-2.4,0-4.6-0.7-6.5-2c0.2-2.5,2.3-4.5,4.8-4.5l3.2,0c2.6,0,4.6,2,4.8,4.5C17.6,23.6,15.4,24.4,13,24.4L13,24.4z M20.9,21.1
            c-0.7-2.8-3.3-4.9-6.3-4.9l-3.2,0c-3,0-5.6,2.1-6.3,4.9c-2.1-2.1-3.5-5-3.5-8.2C1.6,6.7,6.7,1.6,13,1.6S24.4,6.7,24.4,13
            C24.4,16.2,23,19,20.9,21.1z M13,6.5c-2.2,0-4.1,1.8-4.1,4.1c0,2.2,1.8,4.1,4.1,4.1c2.2,0,4.1-1.8,4.1-4.1
            C17.1,8.3,15.2,6.5,13,6.5z M13,13c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4S14.3,13,13,13z"/>
        </g>
        </g>
    </svg>
`;
}
