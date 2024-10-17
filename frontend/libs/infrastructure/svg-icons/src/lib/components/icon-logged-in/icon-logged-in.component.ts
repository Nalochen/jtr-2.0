import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-logged-in',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLoggedInComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 26 26">
        <g>
            <path class="st0" d="M13,0C5.8,0,0,5.8,0,13s5.8,13,13,13s13-5.8,13-13S20.2,0,13,0z M20.9,21.2c-0.7-2.8-3.2-4.9-6.3-4.9h-3.2
               c-3,0-5.6,2.1-6.3,4.9C3,19,1.6,16.2,1.6,13C1.6,6.7,6.7,1.6,13,1.6S24.4,6.7,24.4,13C24.4,16.2,23,19,20.9,21.2z"/>
            <circle class="st0" cx="13" cy="10.6" r="4.1"/>
        </g>
    </svg>`;
}
