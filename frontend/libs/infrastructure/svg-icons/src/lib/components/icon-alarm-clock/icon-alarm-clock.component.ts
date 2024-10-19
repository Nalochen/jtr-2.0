import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-alarm-clock',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAlarmClockComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 99.6 100">
    <path
        d="M49.8,13.43A42.61,42.61,0,0,0,15.66,81.62L8,89.25a3,3,0,0,0,0,4.31H8l4.31,4.31a3,3,0,0,0,4.31,
        0l7.64-7.64a42.42,42.42,0,0,0,51,0L83,97.87a3,3,0,0,0,4.31,0h0l4.31-4.31a3,3,0,0,0,0-4.31h0l-7.64-7.63A42.61,
        42.61,0,0,0,49.8,13.43Zm0,76.19A33.53,33.53,0,1,1,83.32,56.09,33.53,33.53,0,0,1,49.8,89.62ZM19.32,1.24A18.27,
        18.27,0,0,0,1,19.52,18,18,0,0,0,4,29.29L31.74,6.13A18.18,18.18,0,0,0,19.32,1.24Zm35.05,55.7V33.24a1.52,1.52,
        0,0,0-1.52-1.53h-6.1a1.52,1.52,0,0,0-1.52,1.53V58.41a6.11,6.11,0,0,0,2.28,4.76L59.81,73a1.62,1.62,0,0,0,1.12.33,
        1.5,1.5,0,0,0,1-.56L65.75,68a1.51,1.51,0,0,0-.23-2.14h0ZM80.28,1.24A18.22,18.22,0,0,0,67.86,6.12L95.65,29.28a18,
        18,0,0,0,2.91-9.76A18.27,18.27,0,0,0,80.28,1.24Z"/>
</svg>`;
}
