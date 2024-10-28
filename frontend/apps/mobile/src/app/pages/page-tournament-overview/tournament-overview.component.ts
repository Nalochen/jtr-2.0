import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tournament-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournament-overview.component.html',
  styleUrl: './tournament-overview.component.less',
})
export class TournamentOverviewComponent {}
