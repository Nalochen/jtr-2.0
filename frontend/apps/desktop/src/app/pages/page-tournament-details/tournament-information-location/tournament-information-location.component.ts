import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatDividerModule} from '@angular/material/divider';

import {TournamentData} from '@jtr/data-domain/store';

import {ChipComponent, DataContainerComponent, DataContainerRowComponent} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tournament-information-location',
  standalone: true,
  imports: [CommonModule, DataContainerComponent, DataContainerRowComponent, MatDividerModule, ChipComponent, TranslatePipe],
  templateUrl: './tournament-information-location.component.html',
  styleUrl: './tournament-information-location.component.less',
})
export class TournamentInformationLocationComponent {
    @Input() public tournament!: TournamentData;
}
