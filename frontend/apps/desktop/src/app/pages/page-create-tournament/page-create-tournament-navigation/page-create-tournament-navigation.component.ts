import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-create-tournament-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-create-tournament-navigation.component.html',
  styleUrl: './page-create-tournament-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCreateTournamentNavigationComponent {}
