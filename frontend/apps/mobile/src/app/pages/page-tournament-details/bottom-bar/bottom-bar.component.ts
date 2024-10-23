import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ButtonComponent } from '../../../ui-shared';
import { ScrollToTopComponent } from '../../../ui-shared/lib/scroll-to-top/scroll-to-top.component';


@Component({
  selector: 'bottom-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent, ScrollToTopComponent],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.less',
})
export class BottomBarComponent {}
