import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tournament-information-additional',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerComponent,
    DataContainerRowComponent,
    TranslatePipe,
  ],
  templateUrl: './tournament-information-additional.component.html',
  styleUrl: './tournament-information-additional.component.less',
})
export class TournamentInformationAdditionalComponent {
  @Input() public tournamentAdditionalInformation!: string;
}
