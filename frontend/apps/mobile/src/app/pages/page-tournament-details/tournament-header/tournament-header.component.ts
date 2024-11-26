import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import {TournamentData} from '@jtr/data-domain/store';

@Component({
  selector: 'tournament-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatProgressBarModule,
  ],
  templateUrl: './tournament-header.component.html',
  styleUrl: './tournament-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentHeaderComponent {
  @Input() public tournament!: TournamentData;
}
