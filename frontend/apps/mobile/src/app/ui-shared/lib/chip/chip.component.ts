import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.less',
})
export class ChipComponent {}
