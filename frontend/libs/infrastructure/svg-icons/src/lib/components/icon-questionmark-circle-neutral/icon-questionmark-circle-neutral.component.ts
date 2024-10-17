import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-questionmark-circle-neutral',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconQuestionmarkCircleNeutralComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 100 100">
    <path d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90.32A40.32,40.32,0,1,1,90.32,50,40.3,40.3,0,0,1,50,90.32Zm7-14.74a7,7,0,1,1-7-7A7,7,0,0,1,57,75.58Z" />
    <path d="M53.8,63.6H46.56a2.41,2.41,0,0,1-2.4-2.7c1-8.21,6.36-12,10-14.56S59,42.83,59,39.62c0-8.36-7.16-8.78-8.59-8.78-.89,0-8.13.23-9.26,7.72a2.42,2.42,0,0,1-2.39,2.06H31.54a2.44,2.44,0,0,1-2.41-2.69,20.78,20.78,0,0,1,6.68-13.58,21.63,21.63,0,0,1,14.6-5.51C60.64,18.84,71,26,71,39.62c0,9.61-6,13.78-9.92,16.55-3,2.13-4.48,3.26-4.92,5.55A2.39,2.39,0,0,1,53.8,63.6Z" />
</svg>`;
}
