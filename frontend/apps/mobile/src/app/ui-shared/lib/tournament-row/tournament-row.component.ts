import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatIconButton } from '@angular/material/button';

import { TournamentOverviewData } from '@jtr/data-domain/store';

import {
  ButtonComponent,
  DataContainerComponent,
  DataContainerRowComponent,
  StatusIndicatorComponent
} from '../../index';

@Component({
  selector: 'tournament-row',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    MatIconButton,
    StatusIndicatorComponent,
    DataContainerRowComponent,
    ButtonComponent,
  ],
  templateUrl: './tournament-row.component.html',
  styleUrl: './tournament-row.component.less',
})
export class TournamentRowComponent {
  @Input() public tournament!: TournamentOverviewData;
  @Input() public isPreviousTournament = true;

  public detailsClick(): void {
    window.open(`/tournament-details/${this.tournament.id}`, '_self');
  }
}
