import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatDividerModule} from '@angular/material/divider';

import {TournamentData} from '@jtr/data-domain/store';

import {DataContainerExpandableComponent, DataContainerRowComponent, InfoButtonComponent} from '../../../ui-shared';

@Component({
  selector: 'tournament-information-rules',
  standalone: true,
  imports: [CommonModule, DataContainerExpandableComponent, DataContainerRowComponent, InfoButtonComponent, MatDividerModule],
  templateUrl: './tournament-information-rules.component.html',
  styleUrl: './tournament-information-rules.component.less',
})
export class TournamentInformationRulesComponent extends DataContainerExpandableComponent {
    @Input() public tournament!: TournamentData;
}
