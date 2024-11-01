import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { DataContainerComponent, DataContainerRowComponent } from '../../ui-shared';
import { StatusIndicatorComponent } from '../../ui-shared/lib/status-indicator/status-indicator.component';

@Component({
  selector: 'app-tournament-overview',
  standalone: true,
  imports: [CommonModule, DataContainerComponent, MatButtonModule, StatusIndicatorComponent, DataContainerRowComponent],
  templateUrl: './tournament-overview.component.html',
  styleUrl: './tournament-overview.component.less',
})
export class TournamentOverviewComponent {
  public teams = ['team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7', 'team8', 'team9', 'team10', 'team11', 'team12', 'team13', 'team14', 'team15'];
}
