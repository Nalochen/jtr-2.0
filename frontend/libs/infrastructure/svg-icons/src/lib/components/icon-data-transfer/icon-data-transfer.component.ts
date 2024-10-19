import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-data-transfer',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDataTransferComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg viewBox="0 0 237.8 100" fill="#color-placeholder">
        <path d="M103.1.3H9.8C4.7.3.5 4.5.5 9.6v56c0 5.1 4.2 9.3 9.3 9.3h93.3c5.1 0 9.3-4.2 9.3-9.3v-56c0-5.2-4.1-9.3-9.3-9.3zm-1.2 65.2H11c-.6 0-1.2-.5-1.2-1.2V10.7c0-.6.5-1.2 1.2-1.2h90.9c.6 0 1.2.5 1.2 1.2v53.6c0 .7-.5 1.2-1.2 1.2zm-8.1 29.6c0 2.6-2.1 4.7-4.7 4.7H23.8c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7H43l3.6-10.8c.3-1 1.2-1.6 2.2-1.6h15.3c1 0 1.9.6 2.2 1.6L70 90.4h19.2c2.5 0 4.6 2.1 4.6 4.7zM228 .3h-93.3c-5.1 0-9.3 4.2-9.3 9.3v56c0 5.1 4.2 9.3 9.3 9.3H228c5.1 0 9.3-4.2 9.3-9.3v-56c0-5.2-4.2-9.3-9.3-9.3zm-1.2 65.2h-90.9c-.6 0-1.2-.5-1.2-1.2V10.7c0-.6.5-1.2 1.2-1.2h90.9c.6 0 1.2.5 1.2 1.2v53.6c0 .7-.6 1.2-1.2 1.2zm-8.2 29.6c0 2.6-2.1 4.7-4.7 4.7h-65.3c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7h19.2l3.6-10.8c.3-1 1.2-1.6 2.2-1.6H189c1 0 1.9.6 2.2 1.6l3.6 10.8H214c2.6 0 4.6 2.1 4.6 4.7z"/>
        <path d="M142 33.3H80.8c-.8 0-1.4.6-1.4 1.4v6.5c0 .8.6 1.4 1.4 1.4H142V48c0 2.5 3 3.7 4.8 2l10-10a2.84 2.84 0 0 0 0-4l-10-10c-1.8-1.8-4.8-.5-4.8 2v5.3z"/>
    </svg>`;
}
