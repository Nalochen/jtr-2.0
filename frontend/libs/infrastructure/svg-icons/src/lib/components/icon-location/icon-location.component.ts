import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-location',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLocationComponent extends AbstractIconComponent {
  protected override rawIcon: string = `<svg fill='#color-placeholder' viewBox="0 0 17.459 26.189">
        <path d="M8.73,0h0A8.78,8.78,0,0,0,0,8.826c0,4.74,8.287,16.735,8.7,17.337v.026S17.459,13.7,17.459,8.826A8.78,8.78,0,0,0,8.73,0Zm0,13.592a4.819,4.819,0,1,1,4.795-4.819A4.811,4.811,0,0,1,8.73,13.592Z"/>
        </svg>`;
}
