import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import {
  DataContainerExpandableComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'tournament-information-additional',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerRowComponent,
    DataContainerExpandableComponent,
    DividerModule,
    TranslatePipe,
  ],
  templateUrl: './tournament-information-additional.component.html',
  styleUrl: './tournament-information-additional.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationAdditionalComponent extends DataContainerExpandableComponent {
  @Input() public tournamentAdditionalInformation!: string;
}
