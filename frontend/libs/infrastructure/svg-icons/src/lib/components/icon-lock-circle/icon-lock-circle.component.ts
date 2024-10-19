import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-lock-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLockCircleComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg viewBox="0 0 40.18 40.18">
    <circle fill='#color-placeholder' cx="50%" cy="50%" r="50%"></circle>
    <path fill="white" d="M19.033,6.871A8.267,8.267,0,0,0,10.915,0h-.194a8.351,8.351,0,0,0-8.2,6.871A2.32,2.32,0,0,0,0,9.142V25.488A2.182,2.182,0,0,0,2.327,27.7H19a2.32,2.32,0,0,0,2.6-2.216V9.336C21.637,7.868,20.75,6.926,19.033,6.871Zm-6.538,9.5v6.621H9.17V16.373A2.97,2.97,0,0,1,8.09,14.24a2.786,2.786,0,0,1,5.568,0A2.428,2.428,0,0,1,12.494,16.373ZM5.014,6.649a5.827,5.827,0,0,1,5.707-4.433h.139a5.646,5.646,0,0,1,5.568,4.433Z" transform="translate(9.657 4.99)"/>
</svg>`;
}
