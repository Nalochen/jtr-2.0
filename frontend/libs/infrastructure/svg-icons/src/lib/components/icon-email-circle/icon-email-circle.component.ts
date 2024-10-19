import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-email-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEmailCircleComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill="#color-placeholder" viewBox="0 0 101.6 102">
  <path d="M99.76 46.25C99.76 19.3 78 1.94 50.7 1.94A49.06 49.06 0 1 0 79.8 90.5a2.38 2.38 0 0 0 .41-3.41l-3-3.68A2.39 2.39 0 0 0 74 83a39.56 39.56 0 1 1-23.3-71.56c21.65 0 39.56 12.86 39.56 34.81 0 12.49-8.4 19.44-16.42 19.44-3.86 0-4-2.49-3.24-6.22l5.66-29.38a2.37 2.37 0 0 0-2.33-2.83h-7.75a2.39 2.39 0 0 0-2.33 1.93A27.05 27.05 0 0 0 63.4 32c-2.36-3.87-7.1-6.15-12.9-6.15-14.16 0-26.7 12.36-26.7 30.24 0 12.1 6.5 20.2 18.43 20.2A20.33 20.33 0 0 0 58 67.89c.82 6.1 5.64 7.52 11.75 7.52 19.61 0 30.01-12.58 30.01-29.16ZM45.58 65.51c-5.64 0-9-3.85-9-10.3 0-11.37 7.83-18.47 14.76-18.47 6 0 9 4.26 9 10.2 0 9.27-6.57 18.57-14.76 18.57Z" vector-effect="non-scaling-stroke"/>
</svg>`;
}
