import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAlarmClockComponent } from '@jtr/infrastructure/svg-icons';

@Component({
  selector: 'page-outline-demo',
  standalone: true,
  imports: [CommonModule, IconAlarmClockComponent],
  templateUrl: './page-outline-demo.component.html',
  styleUrl: './page-outline-demo.component.less',
})
export class PageOutlineDemoComponent {}
