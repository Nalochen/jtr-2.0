import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-email',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEmailComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg viewBox="0 0 143.8000030517578 102" fill='#color-placeholder'>
    <polygon points="104.5,37.4 141.8,76 141.8,3.7" />
    <path d="M46.8,22.6l-21-18.9v18.9c3.4-0.8,6.9-1.3,10.5-1.3C39.9,21.3,43.4,21.8,46.8,22.6z" />
    <polygon points="137.7,0 30,0 83.9,48.5" />
    <path d="M83.9,55.9l-6.8-6.1c1.7,4.6,2.6,9.6,2.6,14.8c0,5.4-1,10.5-2.8,15.3h61l-37.6-38.8L83.9,55.9z" />
    <path d="M53.9,90.6c-4.3,1.7-9.4,2.5-15.4,2.5c-6.2,0-11.7-1-16.5-3s-8.5-5.1-11.2-9.5c-2.7-4.3-4-9.1-4-14.4&#xA;&#9;&#9;c0-5.4,1.2-10.6,3.6-15.7c2.4-5,5.9-8.9,10.6-11.7c4.7-2.8,10.5-4.1,17.2-4.1c8,0,14.2,2.1,18.6,6.2s6.7,9.3,6.7,15.4&#xA;&#9;&#9;c0,3.4-0.8,6.7-2.4,9.9c-1.6,3.2-3.6,5.7-6.2,7.6C53,75.2,51.5,76,50.3,76c-0.4,0-0.7-0.2-1-0.5s-0.4-0.8-0.4-1.4&#xA;&#9;&#9;c0-0.5,0.2-1.6,0.5-3.3l5.7-26.9h-9.9l-0.9,4.2c-2.1-3.4-5.4-5.1-9.9-5.1C28.2,43,23,45.9,19,51.8c-3.3,4.8-4.9,10.2-4.9,16.1&#xA;&#9;&#9;c0,4.7,1.4,8.6,4.1,11.4c2.7,2.9,6.2,4.3,10.3,4.3c3.8,0,7.2-1.4,10.2-4.3c0.4,1.4,1.1,2.5,2.1,3.2s2.6,1.1,4.7,1.1&#xA;&#9;&#9;c7.7,0,14-3.2,18.9-9.7c3.9-5.1,5.9-10.9,5.9-17.3c0-5.3-1.3-10.3-3.9-14.8s-6.3-8-11.2-10.4s-10.5-3.7-16.8-3.7&#xA;&#9;&#9;c-7.4,0-14,1.5-19.8,4.6c-5.8,3-10.3,7.6-13.6,13.6C1.7,52,0,58.5,0,65.5c0,6.4,1.5,12.3,4.4,17.7c2.9,5.4,7.4,9.5,13.4,12.3&#xA;&#9;&#9;s13.1,4.2,21.4,4.2c8.5,0,15.7-1.6,21.7-4.9c5.2-2.9,9-6.8,11.5-11.9h-8C61.7,86.5,58.2,88.9,53.9,90.6z M40.8,66.9&#xA;&#9;&#9;c-1,2.9-2.1,5.1-3.4,6.7c-0.9,1.1-1.9,1.9-2.8,2.4c-1.2,0.7-2.6,1-4,1c-1.9,0-3.5-0.7-4.8-2.2s-1.9-3.8-1.9-7&#xA;&#9;&#9;c0-2.4,0.5-5.1,1.4-8.2c0.9-3.1,2.3-5.4,4.1-7.1c1.8-1.7,3.8-2.5,6-2.5c2,0,3.7,0.8,5,2.3s2,3.7,2,6.5C42.2,61.3,41.7,64,40.8,66.9&#xA;&#9;&#9;z" />
</svg>`;
}
