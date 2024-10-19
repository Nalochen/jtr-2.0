import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-tip',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTipComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg viewBox="0 0 123.3 100" fill='#color-placeholder'>
    <path d="M22,37.8a4.58,4.58,0,0,0-4.58-4.58H5.21a4.58,4.58,0,1,0,0,
        9.15h12.2A4.58,4.58,0,0,0,22,37.8ZM21.05,56l-10.57,6.1a4.58,4.58,0,0,
        0,4.43,8l.15-.08,10.57-6.1A4.58,4.58,0,0,0,21.05,56Zm4.58-44.24L15.06,
        5.61a4.58,4.58,0,1,0-4.72,7.84l.14.09,10.57,6.1a4.58,4.58,0,0,0,4.72-7.84ZM100,
        20.25a4.45,4.45,0,0,0,2.28-.61l10.57-6.1a4.58,4.58,0,0,0-4.57-7.93l-10.57,6.1A4.57,
        4.57,0,0,0,100,20.25Zm18.12,13h-12.2a4.58,4.58,0,1,0,0,9.15h12.2a4.58,4.58,0,1,0,0-9.15Zm-5.27,
        28.84L102.25,56a4.58,4.58,0,0,0-4.72,7.84l.14.08L108.24,70a4.58,4.58,0,0,0,4.58-7.92ZM61.65,
        1.19A33.53,33.53,0,0,0,36.4,56.82c3.17,3.63,8.15,11.21,10,17.58h9.15v0a9,9,0,0,0-.4-2.68A60.33,
        60.33,0,0,0,43.28,50.79a24.41,24.41,0,1,1,36.74,0A60.53,60.53,0,0,0,68.18,71.66a11,11,0,0,0-.43,
        2.73v0H76.9c1.85-6.37,6.83-14,10-17.57A33.54,33.54,0,0,0,61.65,1.19Zm0,15.25A18.33,18.33,0,0,0,
        43.34,34.75a3.06,3.06,0,0,0,6.11,0,12.21,12.21,0,0,1,12.2-12.21,3,3,0,1,0,0-6.1ZM46.41,88.74a3.08,
        3.08,0,0,0,.51,1.69l4.67,7a3.06,3.06,0,0,0,2.54,1.36h15a3,3,0,0,0,2.55-1.36l4.67-7a3,
        3,0,0,0,.51-1.68V80.51H46.4Z"/>
</svg>`;
}