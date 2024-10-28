import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-upload-outline',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUploadOutlineComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg viewBox="0 0 16.367 20">
  <path d="M34.353,18.147l-2.542-3.739V10.034h2.5a1.874,1.874,0,0,0,1.324-3.2L29.386.587a1.875,1.875,0,0,0-2.652,0L20.486,6.836a1.876,1.876,0,0,0,1.328,3.2h2.5v1.25L21.62,18.147c-1.035,0-1.8-.032-1.8,1V19.1c0,1.035.769.929,1.8.929l12.733,0c1.035,0,1.82.106,1.82-.928h0C36.173,18.072,35.388,18.147,34.353,18.147ZM21.814,8.16,28.062,1.91,34.311,8.16H29.937v6.249H26.188V8.16Zm12.54,9.988H21.62l2.693-6.863v3.124a1.875,1.875,0,0,0,1.875,1.875h3.749a1.875,1.875,0,0,0,1.875-1.875l2.541,3.739Z" transform="translate(-19.816 -0.038)" fill="#color-placeholder"/>
</svg>
`;
}
