import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';

import { TournamentData } from '@jtr/data-domain/store';

import {
  DataContainerExpandableComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tournament-information-contacts',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerExpandableComponent,
    DataContainerRowComponent,
    MatDividerModule,
    TranslatePipe,
  ],
  templateUrl: './tournament-information-contacts.component.html',
  styleUrl: './tournament-information-contacts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationContactsComponent extends DataContainerExpandableComponent {
  @Input() public tournament!: TournamentData;
}
