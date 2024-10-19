import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-settings',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSettingsComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 512 512">
  <path d="M490.4 301.7 452.8 280l.5-5.3c1.2-12.5 1.2-25.2 0-37.7l-.5-5.3 37.5-21.7c6.5-3.7 9.6-11.4 7.6-18.7-11.2-41.7-33.4-80.1-64.1-110.8-5.3-5.3-13.5-6.4-19.9-2.6l-37.4 21.6-4.3-3.1C362 89.1 351 82.8 339.6 77.6l-4.9-2.2v-43c0-7.4-5.1-14.1-12.3-16-41.8-11.2-86.1-11.2-127.9 0-7.2 2-12.3 8.5-12.3 16v43.3l-4.9 2.2C165.9 83 155 89.4 144.7 96.6l-4.3 3.1L103 78.1c-6.5-3.7-14.7-2.7-19.9 2.6-30.7 30.8-52.9 69-64.1 110.8-2 7.2 1.2 14.9 7.6 18.7l37.5 21.7-.5 5.3c-1.2 12.5-1.2 25.2 0 37.7l.5 5.3-37.5 21.7c-6.5 3.7-9.6 11.4-7.6 18.7 11.2 41.7 33.4 80.1 64.1 110.8 5.3 5.3 13.5 6.4 19.9 2.6l37.4-21.6 4.3 3.1c10.2 7.3 21.2 13.6 32.6 18.8l4.9 2.2v43.3c0 7.4 5.1 14.1 12.3 16 41.8 11.2 86.1 11.2 127.9 0 7.2-2 12.3-8.5 12.3-16v-43.3l4.9-2.2c11.5-5.2 22.4-11.6 32.6-18.8l4.3-3.1 37.4 21.6c6.5 3.7 14.7 2.7 19.9-2.6 30.7-30.8 52.9-69 64.1-110.8 2.1-7.4-1-15.1-7.5-18.9zm-30.2 28.7c-8.5 22.9-20.8 44.1-36.4 62.9l-4.4 5.4-46.3-26.7c-28.3 24.1-36.4 28.7-71.4 41.2v53.4l-6.9 1.1c-12.1 2.1-24.2 3.1-36.4 3.1-12.1 0-24.3-1-36.4-3.1l-6.9-1.1v-53.4c-34.9-12.5-43-17.2-71.4-41.2l-46.3 26.8-4.4-5.4c-15.6-18.8-27.9-40-36.4-62.9l-2.4-6.5 46.3-26.7c-6.6-36.6-6.6-45.9 0-82.5l-46.3-26.7 2.4-6.5c8.5-22.9 20.7-44 36.4-62.9l4.4-5.4 46.3 26.8c28.3-24.1 36.4-28.7 71.4-41.2V45.3l6.9-1.1c24.1-4.1 48.6-4.1 72.6 0l6.9 1.1v53.4c34.9 12.5 43 17.2 71.4 41.2l46.3-26.8 4.4 5.4c15.6 18.8 27.9 40 36.4 62.9l2.4 6.5-46.2 26.8c6.6 36.6 6.6 45.9 0 82.5l46.3 26.7-2.3 6.5z"/>
  <path d="M258.5 165c-50.1 0-90.9 40.8-90.9 90.9s40.8 90.9 90.9 90.9 90.9-40.8 90.9-90.9-40.8-90.9-90.9-90.9zm0 148.8c-31.9 0-57.9-25.9-57.9-57.9s25.9-57.9 57.9-57.9 57.9 25.9 57.9 57.9-26 57.9-57.9 57.9z"/>
</svg>`;
}