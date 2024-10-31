import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {DataContainerComponent, DataContainerRowComponent} from '../../../ui-shared';

@Component({
  selector: 'tournament-information-additional',
  standalone: true,
  imports: [CommonModule, DataContainerComponent, DataContainerRowComponent],
  templateUrl: './tournament-information-additional.component.html',
  styleUrl: './tournament-information-additional.component.less',
})
export class TournamentInformationAdditionalComponent {
    @Input() public tournamentAdditionalInformation!: string;
}
