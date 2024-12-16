import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TournamentData } from '@jtr/data-domain/store';

@Component({
  selector: 'tournament-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './tournament-header.component.html',
  styleUrl: './tournament-header.component.less',
})
export class TournamentHeaderComponent {
  @Input() public tournament!: TournamentData;
}
