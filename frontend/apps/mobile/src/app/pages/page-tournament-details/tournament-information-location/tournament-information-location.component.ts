import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatDividerModule} from '@angular/material/divider';

import {TournamentData} from '@jtr/data-domain/store';

import {ChipComponent, DataContainerExpandableComponent, DataContainerRowComponent} from '../../../ui-shared';

@Component({
  selector: 'tournament-information-location',
  standalone: true,
  imports: [CommonModule, DataContainerExpandableComponent, DataContainerRowComponent, MatDividerModule, ChipComponent],
  templateUrl: './tournament-information-location.component.html',
  styleUrl: './tournament-information-location.component.less',
})
export class TournamentInformationLocationComponent extends DataContainerExpandableComponent {
    @Input() public tournament!: TournamentData;
}
