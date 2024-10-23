import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ButtonComponent } from '../../../ui-shared';


@Component({
  selector: 'bottom-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.less',
})
export class BottomBarComponent {}
