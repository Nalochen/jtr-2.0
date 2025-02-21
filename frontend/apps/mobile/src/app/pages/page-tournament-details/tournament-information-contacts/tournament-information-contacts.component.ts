import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TournamentData } from '@jtr/data-domain/store';

import {
  DataContainerExpandableComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'tournament-information-contacts',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerExpandableComponent,
    DataContainerRowComponent,
    DividerModule,
    TranslatePipe,
  ],
  templateUrl: './tournament-information-contacts.component.html',
  styleUrl: './tournament-information-contacts.component.less',
})
export class TournamentInformationContactsComponent extends DataContainerExpandableComponent {
  @Input() public tournament!: TournamentData;
}
