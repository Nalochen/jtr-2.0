import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'info-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIcon, MatDialogModule, MatTooltipModule],
  templateUrl: './info-button.component.html',
  styleUrl: './info-button.component.less',
})
export class InfoButtonComponent {
  @Input() infoText = '';
}
