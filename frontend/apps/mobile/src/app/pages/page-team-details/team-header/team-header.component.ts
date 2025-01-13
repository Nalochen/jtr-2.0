import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

@Component({
  selector: 'team-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './team-header.component.html',
  styleUrl: './team-header.component.less',
})
export class TeamHeaderComponent {
  @Input() public team!: TeamData;
}
