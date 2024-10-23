import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonColorEnum, ButtonSizeEnum } from '../../../infrastructure/button-style/button-style.enum';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.less',
})
export class ButtonComponent {
  @Input() public color: ButtonColorEnum = ButtonColorEnum.Secondary;
  @Input() public size: ButtonSizeEnum = ButtonSizeEnum.FitContent;

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonSizeEnum = ButtonSizeEnum;

  public readonly isPrimary = this.color === ButtonColorEnum.Primary;
  public readonly isSecondary = this.color === ButtonColorEnum.Secondary;
  public readonly isFitContent = this.size === ButtonSizeEnum.FitContent;
  public readonly isFullWidth = this.size === ButtonSizeEnum.FullWidth;
}
