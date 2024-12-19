import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { MatIconButton } from '@angular/material/button';

import { TournamentOverviewData } from '@jtr/data-domain/store';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
  DataContainerComponent,
} from '../../index';
import { StatusIndicatorComponent } from '../status-indicator/status-indicator.component';

@Component({
  selector: 'tournament-row',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    MatIconButton,
    StatusIndicatorComponent,
    ButtonComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './tournament-row.component.html',
  styleUrl: './tournament-row.component.less',
})
export class TournamentRowComponent {
  @Input() public tournament!: TournamentOverviewData;
  @Input() public isPreviousTournament = true;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(private readonly router: Router) {}

  public onDetailsClick(): void {
    this.router.navigate([`tournament-details/${this.tournament.id}`]);
  }
}
