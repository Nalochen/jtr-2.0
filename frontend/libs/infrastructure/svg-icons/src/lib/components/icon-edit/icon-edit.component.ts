import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-edit',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconEditComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 38 38">
    <path d="M6.20324 2.17261C2.78404 2.17261 0 4.95665 0 8.37585V31.2334C0 34.6526 2.78404 37.4387 6.20324 37.4387H29.0608C32.48 37.4387 35.2655 34.6526 35.2655 31.2334V23.979H33.2326V31.2334C33.2326 33.5615 31.3888 35.4052 29.0608 35.4052H6.20324C3.87516 35.4052 2.03295 33.5615 2.03295 31.2334V8.37585C2.03295 6.04776 3.87516 4.20607 6.20324 4.20607H13.4416V2.17261H6.20324Z"/>
    <path d="M15.6681 29.0061L26.5037 18.1003L37.3394 7.19455L33.564 3.61522L29.7974 0L18.9618 10.9057L8.16243 21.8198L5.84908 31.2265L5.58838 32.3046C15.6677 29.0058 15.6677 29.0058 15.6677 29.0058L15.6681 29.0061ZM30.1637 2.32632L34.9645 6.94293L14.9158 27.1594L10.1151 22.5427L30.1637 2.32632Z"/>
</svg>`;
}
