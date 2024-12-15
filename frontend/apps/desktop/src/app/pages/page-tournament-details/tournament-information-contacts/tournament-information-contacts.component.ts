import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';

import { TournamentData } from '@jtr/data-domain/store';

import {
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tournament-information-contacts',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerComponent,
    DataContainerRowComponent,
    MatDividerModule,
    TranslatePipe,
  ],
  templateUrl: './tournament-information-contacts.component.html',
  styleUrl: './tournament-information-contacts.component.less',
})
export class TournamentInformationContactsComponent {
  @Input() public tournament!: TournamentData;
}
