import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'tournament-registration-overlay',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './tournament-header.registration-overlay.html',
  styleUrl: './tournament-registration-overlay.component.less',
})
export class TournamentRegistrationOverlayComponent {
}
