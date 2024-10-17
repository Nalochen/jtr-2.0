import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-euro-sign-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEuroSignCircleComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg viewBox="0 0 100 100" fill='#color-placeholder'>
    <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M54.3,84.9c-10.6,0-20.2-4.4-26.1-12.3
        c-2.9-3.6-5-8.1-6.1-14.1h-6.6v-7h6c-0.2-1.8-0.2-3.1-0.1-5h-5.9v-7H22c1.4-6,4.3-11.9,7.8-15.8c6.1-6.8,14.7-10.9,24.9-10.9
        c6.6,0,12.2,1.4,16.1,3.2l-3,12.2c-2.9-1.2-7.2-2.5-12-2.5c-5.2,0-9.8,1.9-13.2,5.8c-1.4,1.8-3.1,5-3.8,8h26.7v7H37.7
        c0,1.6-0.1,3.5,0.2,5h27.6v7H39.1c0.7,4,2,5.9,3.6,7.7c3.4,3.9,8.4,5.7,13.8,5.7c5,0,10-1.5,12.2-2.8l2.5,11.7
        C67.6,82.7,61.3,84.9,54.3,84.9z"/>
</svg>`;
}
