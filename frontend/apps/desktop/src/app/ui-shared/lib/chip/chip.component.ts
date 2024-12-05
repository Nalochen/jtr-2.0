import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';
import { ButtonColorEnum } from '../button/enums/color.enum';


@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.less',
})
export class ChipComponent {
  @Input() public color: ButtonColorEnum = ButtonColorEnum.Light;
  @Input() public isClickable = false;
  @Input() public isClicked = false;
}
