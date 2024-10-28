import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'tournament-details-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatProgressBarModule],
  templateUrl: './tournament-details-header.component.html',
  styleUrl: './tournament-details-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentDetailsHeaderComponent {}
