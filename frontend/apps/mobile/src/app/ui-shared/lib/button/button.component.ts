import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { ButtonColorEnum, ButtonSizeEnum } from '../../../infrastructure/button-style/button-style.enum';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.less',
})
export class ButtonComponent implements OnInit{
  @Input() public color: ButtonColorEnum = ButtonColorEnum.Secondary;
  @Input() public size: ButtonSizeEnum = ButtonSizeEnum.FitContent;

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonSizeEnum = ButtonSizeEnum;

  public isPrimary = false;
  public isSecondary = false;
  public isFitContent = false;
  public isFullWidth = false;

  public ngOnInit() {
    this.isPrimary = this.color === ButtonColorEnum.Primary;
    this.isSecondary = this.color === ButtonColorEnum.Secondary;
    this.isFitContent = this.size === ButtonSizeEnum.FitContent;
    this.isFullWidth = this.size === ButtonSizeEnum.FullWidth;
  }
}
