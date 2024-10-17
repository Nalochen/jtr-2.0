import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-delete',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDeleteComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 83.5 102">
    <path d="M80.6,18.8H62.7v-3.5c0-0.1,0-0.8,0-2.8c0-6.2,0-12.5-12.5-12.5c-4.5,0-7.3,0-9.5,0c-2.1,0-5,0-9.5,0
C18.8,0,18.8,6.2,18.8,12.5c0,2,0,2.7,0,2.8v3.5h-18c-0.4,0-0.8,0.4-0.8,0.8v10.8c0,0.4,0.4,0.8,0.8,0.8h4.6c0.4,0,0.8,0.4,0.8,0.8
v67.1c0,0.4,0.4,0.8,0.8,0.8h33.6h33.6c0.4,0,0.8-0.4,0.8-0.8v-67c0-0.4,0.4-0.8,0.8-0.8h4.6c0.4,0,0.8-0.4,0.8-0.8V19.6
C81.5,19.2,81,18.8,80.6,18.8z M25,86.7c0,0.4-0.4,0.8-0.8,0.8h-4.6c-0.4,0-0.8-0.4-0.8-0.8v-51c0-0.4,0.4-0.8,0.8-0.8h4.8
c0.4,0,0.8,0.4,0.8,0.8L25,86.7z M44.2,86.7c0,0.4-0.4,0.8-0.8,0.8h-2.6h-2.6c-0.4,0-0.8-0.4-0.8-0.8v-51c0-0.4,0.4-0.8,0.8-0.8h2.6
h2.6c0.4,0,0.8,0.4,0.8,0.8V86.7z M50.4,19H31v-6.6h19.5L50.4,19L50.4,19z M62.7,86.7c0,0.4-0.4,0.8-0.8,0.8h-4.6
c-0.4,0-0.8-0.4-0.8-0.8l-0.2-51c0-0.4,0.4-0.8,0.8-0.8h4.8c0.4,0,0.8,0.4,0.8,0.8V86.7z"/>
</svg>`;
}
