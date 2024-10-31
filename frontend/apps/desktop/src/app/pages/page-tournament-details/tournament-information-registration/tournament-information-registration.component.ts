import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatDividerModule} from '@angular/material/divider';

import {TournamentData} from '@jtr/data-domain/store';

import {
  ChipComponent,
  DataContainerComponent,
  DataContainerRowComponent
} from '../../../ui-shared';

@Component({
  selector: 'tournament-information-registration',
  standalone: true,
  imports: [CommonModule, DataContainerComponent, DataContainerRowComponent, MatDividerModule, ChipComponent],
  templateUrl: './tournament-information-registration.component.html',
  styleUrl: './tournament-information-registration.component.less',
})
export class TournamentInformationRegistrationComponent {
    @Input() public tournament!: TournamentData;
}