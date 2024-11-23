import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonColorEnum } from './enums/color.enum';
import { ButtonTypeEnum } from './enums/type.enum';
import { ButtonFunctionType } from './enums/function-type.enum';

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
  @Input() public buttonType: ButtonFunctionType = ButtonFunctionType.BUTTON;
  @Input() public disabled = false;
  @Input() public fullWidth = false;
}
