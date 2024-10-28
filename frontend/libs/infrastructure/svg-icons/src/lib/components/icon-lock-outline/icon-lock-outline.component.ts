import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-lock-outline',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLockOutlineComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 86.5 98.2">
    <path d="M43.15,78.8a5.32,5.32,0,0,1-5.33-5.33V61.29a5.33,5.33,0,1,1,10.66,0V73.47A5.32,5.32,0,0,1,43.15,78.8ZM85.8,46.05V88.7a9.14,9.14,0,0,1-9.14,9.14h-67A9.14,9.14,0,0,1,.5,88.7V46.05a9.15,9.15,0,0,1,9.14-9.14h6.09V27.78A27.42,27.42,0,1,1,70.57,28v8.87h6.09A9.15,9.15,0,0,1,85.8,46.05ZM24.87,36.91H61.43V27.78a18.28,18.28,0,0,0-36.56,0Zm51.79,9.14h-67V88.7h67Z"/>
</svg>`;
}
