import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatDividerModule} from '@angular/material/divider';

import {TournamentData} from '@jtr/data-domain/store';

import {DataContainerComponent, DataContainerRowComponent} from '../../../ui-shared';

@Component({
  selector: 'tournament-information-contacts',
  standalone: true,
  imports: [CommonModule, DataContainerComponent, DataContainerRowComponent, MatDividerModule],
  templateUrl: './tournament-information-contacts.component.html',
  styleUrl: './tournament-information-contacts.component.less',
})
export class TournamentInformationContactsComponent extends DataContainerComponent{
    @Input() public tournament!: TournamentData;
}
