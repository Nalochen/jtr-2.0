import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-questionmark-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconQuestionmarkCircleComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 100 100">
    <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M48.6,84.5c-5.1,0-8.5-3.7-8.5-8.7
        c0-5.1,3.5-8.7,8.5-8.7c5.2,0,8.5,3.6,8.6,8.7C57.2,80.8,53.7,84.5,48.6,84.5z M60,48.8c-3.6,3.9-5,7.7-5,12V63H42.5l-0.1-2.7
        c-0.3-4.9,1.3-10,5.7-15.2c3.1-3.6,5.6-6.8,5.6-10c0-3.4-2.2-5.6-7-5.8c-3.2,0-7,1.1-9.5,2.9l-3.3-10.5c3.5-2,9.2-3.9,16-3.9
        c12.7,0,18.4,7,18.4,15C68.3,40,63.7,44.8,60,48.8z"/>
</svg>`;
}
