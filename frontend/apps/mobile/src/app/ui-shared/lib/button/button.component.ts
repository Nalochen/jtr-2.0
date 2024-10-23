import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonColorEnum, ButtonSizeEnum } from './button-style.enum';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.less',
})
export class ButtonComponent {
  @Input() public color: string = 'Primary';
  @Input() public size: string = 'FitContent';

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonSizeEnum = ButtonSizeEnum;
}
