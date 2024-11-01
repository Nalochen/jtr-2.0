import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatDividerModule} from '@angular/material/divider';

import {TournamentData} from '@jtr/data-domain/store';

import {DataContainerComponent, DataContainerRowComponent} from '../../../ui-shared';

@Component({
  selector: 'tournament-information-team',
  standalone: true,
  imports: [CommonModule, DataContainerComponent, DataContainerRowComponent, MatDividerModule],
  templateUrl: './tournament-information-team.component.html',
  styleUrl: './tournament-information-team.component.less',
})
export class TournamentInformationTeamComponent {
    @Input() public tournament!: TournamentData;
}
