import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-redo',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconRedoComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 21 21">
    <path d="M20.5,0H19.35a.49.49,0,0,0-.5.51l.09,4.11A10.34,10.34,0,1,0,17.26,18a.5.5,0,0,0,0-.72l-.82-.82a.51.51,0,0,0-.69,0,8.16,8.16,0,1,1,2-9.46l-5.27-.12a.49.49,0,0,0-.51.5V8.5a.5.5,0,0,0,.5.5h8a.5.5,0,0,0,.5-.5V.5a.5.5,0,0,0-.5-.5Z"/>
</svg>`;
}
