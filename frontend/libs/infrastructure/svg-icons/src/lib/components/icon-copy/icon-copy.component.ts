import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-copy',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCopyComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg viewBox="0 0 88.9 100">
    <path
    fill="#color-placeholder"
    d="M85.3,13L75.2,2.9c-1.8-1.8-4.1-2.7-6.6-2.7H35.1c-5.2,0-9.3,4.2-9.3,9.3v9.3H10.2c-5.2,0-9.3,4.2-9.3,9.3v62.3
	c0,5.2,4.2,9.3,9.3,9.3h43.6c5.2,0,9.3-4.2,9.3-9.3v-9.3h15.6c5.2,0,9.3-4.2,9.3-9.3V19.6C88,17.1,87,14.8,85.3,13z M52.6,90.5H11.3
	c-0.6,0-1.2-0.5-1.2-1.2V29.4c0-0.6,0.5-1.2,1.2-1.2h14.4v43.6c0,5.2,4.2,9.3,9.3,9.3h18.7v8.2C53.8,90,53.3,90.5,52.6,90.5z
	 M77.5,71.8H36.3c-0.6,0-1.2-0.5-1.2-1.2V10.7c0-0.6,0.5-1.2,1.2-1.2h20.6v17.1c0,2.6,2.1,4.7,4.7,4.7h17.1v39.3
	C78.7,71.3,78.2,71.8,77.5,71.8z M78.7,22H66.2V9.5h1.9c0.3,0,0.6,0.1,0.8,0.3l9.4,9.4c0.2,0.2,0.3,0.5,0.3,0.8V22z"
    />
</svg>`;
}
