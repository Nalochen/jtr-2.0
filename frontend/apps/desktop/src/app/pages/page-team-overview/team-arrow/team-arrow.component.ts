import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatIconButton} from '@angular/material/button';

import { ButtonComponent, DataContainerComponent } from '../../../ui-shared';
import { StatusIndicatorComponent } from '../../../ui-shared/lib/status-indicator/status-indicator.component';

@Component({
  selector: 'arrow',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, MatIconButton, StatusIndicatorComponent, ButtonComponent],
  templateUrl: './team-arrow.component.html',
  styleUrl: './team-arrow.component.less',
})
export class TeamArrowComponent {
  @Input() public hasPlacementChangedUpwards!: boolean | null;
}
