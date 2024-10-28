import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-info-circle-neutral',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconInfoCircleNeutralComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg fill='#color-placeholder' viewBox="0 0 102 102">
    <path d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90.32A40.32,40.32,0,1,1,90.32,50,40.3,40.3,0,0,1,50,
    90.32Zm0-66.67a7,7,0,1,1-7,7A7,7,0,0,1,50,23.65Zm4,52.16H46a2.42,2.42,0,0,1-2.42-2.42V46A2.42,
    2.42,0,0,1,46,43.55H54A2.42,2.42,0,0,1,56.45,46V73.39A2.42,2.42,0,0,1,54,75.81Z"/>
</svg>`;
}
