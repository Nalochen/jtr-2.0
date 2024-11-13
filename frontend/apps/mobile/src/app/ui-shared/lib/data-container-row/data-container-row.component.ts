import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-data-container-row',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './data-container-row.component.html',
  styleUrl: './data-container-row.component.less',
})
export class DataContainerRowComponent {}
