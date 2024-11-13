import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatDivider} from '@angular/material/divider';

import {DataContainerExpandableComponent, DataContainerRowComponent} from '../../../ui-shared';

@Component({
  selector: 'tournament-information-additional',
  standalone: true,
  imports: [CommonModule, DataContainerRowComponent, DataContainerExpandableComponent, MatDivider],
  templateUrl: './tournament-information-additional.component.html',
  styleUrl: './tournament-information-additional.component.less',
})
export class TournamentInformationAdditionalComponent extends DataContainerExpandableComponent {
    @Input() public tournamentAdditionalInformation!: string;
}
