import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tournament-details-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './tournament-details-header.component.html',
  styleUrl: './tournament-details-header.component.less',
})
export class TournamentDetailsHeaderComponent {}
