import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-share',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShareComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg viewBox="0 0 93 118" fill="#color-placeholder"><g>
        <path d="M78.842 37.772H65.084v9h13.758A3.162 3.162 0 0 1 82 49.93v54.684a3.162 3.162 0 0 1-3.158 3.158H14.158A3.162 3.162 0 0 1 11 104.614V49.93a3.162 3.162 0 0 1 3.158-3.158h11.857v-9H14.158A12.172 12.172 0 0 0 2 49.93v54.684a12.172 12.172 0 0 0 12.158 12.158h64.684A12.172 12.172 0 0 0 91 104.614V49.93a12.172 12.172 0 0 0-12.158-12.158Z"/><path d="M24.341 30.6a4.487 4.487 0 0 0 3.045-1.187l14.221-13.075v60.934a4.5 4.5 0 0 0 9 0V15.859l14.164 13.5a4.5 4.5 0 1 0 6.209-6.515L49.605 2.47a4.5 4.5 0 0 0-6.151-.055l-22.16 20.372a4.5 4.5 0 0 0 3.047 7.813Z"/></g></svg>`;
}
