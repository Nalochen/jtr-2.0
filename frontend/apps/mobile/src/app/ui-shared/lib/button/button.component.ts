import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonColorEnum, ButtonTypeEnum } from '../../../infrastructure/button-style/button-style.enum';

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.less',
})
export class ButtonComponent {
  @Input() public color: ButtonColorEnum = ButtonColorEnum.None;
  @Input() public type: ButtonTypeEnum = ButtonTypeEnum.Basic;
  @Input() public buttonType: ButtonType = ButtonType.BUTTON;
  @Input() public fullWidth = false;
}
