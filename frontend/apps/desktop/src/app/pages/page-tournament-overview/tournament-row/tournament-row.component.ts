import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatIconButton } from '@angular/material/button';

import { TournamentOverviewData } from '@jtr/data-domain/store';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
  DataContainerComponent,
} from '../../../ui-shared';
import { StatusIndicatorComponent } from '../../../ui-shared/lib/status-indicator/status-indicator.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

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

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor() {}

  public onDetailsClick(): void {
    window.open(`tournament-details/${this.tournament.id}`, '_self');
  }
}
