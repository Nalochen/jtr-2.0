import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-info-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIcon, MatDialogModule, MatTooltipModule],
  templateUrl: './info-button.component.html',
  styleUrl: './info-button.component.less',
})
export class InfoButtonComponent {
  @Input() public infoText = '';
}
