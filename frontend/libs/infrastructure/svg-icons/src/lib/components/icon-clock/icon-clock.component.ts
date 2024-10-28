import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-clock',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconClockComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 512 512">
        <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm0,448A200,200,0,1,1,456,256,199.94,199.94,0,0,1,256,456Zm61.8-104.4-84.9-61.7a12.08,12.08,0,0,1-4.9-9.7V116a12,12,0,0,1,12-12h32a12,12,0,0,1,12,12V257.7l66.8,48.6a12,12,0,0,1,2.6,16.8L334.6,349a12.08,12.08,0,0,1-16.8,2.6Z"/>
</svg>
`;
}
