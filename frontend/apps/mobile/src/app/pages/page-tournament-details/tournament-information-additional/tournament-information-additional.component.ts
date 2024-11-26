import {CommonModule} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import {MatDivider} from '@angular/material/divider';

import {DataContainerExpandableComponent, DataContainerRowComponent} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tournament-information-additional',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerRowComponent,
    DataContainerExpandableComponent,
    MatDivider,
    TranslatePipe
  ],
  templateUrl: './tournament-information-additional.component.html',
  styleUrl: './tournament-information-additional.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentInformationAdditionalComponent extends DataContainerExpandableComponent {
    @Input() public tournamentAdditionalInformation!: string;
}
