import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-lock',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLockComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 16 20.512">
    <path d="M14.092,5.087A6.121,6.121,0,0,0,8.082,0H7.938A6.183,6.183,0,0,0,1.867,5.087,1.718,1.718,0,0,0,0,6.769v12.1a1.616,1.616,0,0,0,1.723,1.641H14.071A1.718,1.718,0,0,0,16,18.871V6.913C16.02,5.825,15.364,5.128,14.092,5.087ZM9.251,12.123v4.9H6.79v-4.9a2.2,2.2,0,0,1-.8-1.579,2.063,2.063,0,0,1,4.123,0A1.8,1.8,0,0,1,9.251,12.123Zm-5.538-7.2A4.315,4.315,0,0,1,7.938,1.641h.1a4.18,4.18,0,0,1,4.123,3.282Z"/>
</svg>`;
}
