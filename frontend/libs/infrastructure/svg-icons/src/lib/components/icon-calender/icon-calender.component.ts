import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-calender',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCalenderComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg viewBox="0 0 86 100" fill='#color-placeholder'>
    <path d="M83.1,14h-9V4.6c0-3.2-1-4.6-3.6-4.6h-4.7c-3.1,0-4.7,1.5-4.7,4.6V14h-36V4.6c0-3.2-1-4.6-3.9-4.6h-4.7
        C13.4,0,12,1.5,12,4.6V14H3c-1.2,0-3,1.7-3,3v80c0,1.2,1.8,3,3,3h80c1.2,0,3-1.8,3-3V17C86.1,15.9,84.2,14,83.1,14z M5.1,95V38h76
        v57H5.1z"/>
    <rect x="12.1" y="50" width="15" height="14"/>
    <rect x="37.1" y="50" width="14" height="14"/>
    <rect x="60.1" y="50" width="14" height="14"/>
    <rect x="12.1" y="72" width="15" height="15"/>
    <rect x="37.1" y="72" width="14" height="15"/>
    <rect x="60.1" y="72" width="14" height="15"/>
</svg>`;
}
