import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-container.component.html',
  styleUrl: './data-container.component.less',
})
export class DataContainerComponent {}
