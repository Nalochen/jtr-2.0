import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-tick-circle-neutral',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTickCircleNeutralComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 100 100">
    <path d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,9.68A40.32,40.32,0,1,1,9.68,50,40.3,40.3,0,0,1,50,9.68M78.27,35.94l-4.55-4.58a2.42,2.42,0,0,0-3.42,0L41.8,59.62l-12-12.16a2.43,2.43,0,0,0-3.42,0L21.75,52a2.42,2.42,0,0,0,0,3.42L40,73.87a2.43,2.43,0,0,0,3.42,0L78.25,39.36a2.42,2.42,0,0,0,0-3.42Z"/>
</svg>`;
}
