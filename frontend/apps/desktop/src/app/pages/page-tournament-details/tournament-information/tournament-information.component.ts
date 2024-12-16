import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TournamentData } from '@jtr/data-domain/store';

import { TournamentInformationAdditionalComponent } from '../tournament-information-additional/tournament-information-additional.component';
import { TournamentInformationContactsComponent } from '../tournament-information-contacts/tournament-information-contacts.component';
import { TournamentInformationLocationComponent } from '../tournament-information-location/tournament-information-location.component';
import { TournamentInformationRegistrationComponent } from '../tournament-information-registration/tournament-information-registration.component';
import { TournamentInformationRulesComponent } from '../tournament-information-rules/tournament-information-rules.component';

@Component({
  selector: 'tournament-information',
  standalone: true,
  imports: [
    CommonModule,
    TournamentInformationAdditionalComponent,
    TournamentInformationRulesComponent,
    TournamentInformationRegistrationComponent,
    TournamentInformationContactsComponent,
    TournamentInformationLocationComponent,
  ],
  templateUrl: './tournament-information.component.html',
  styleUrl: './tournament-information.component.less',
})
export class TournamentInformationComponent {
  @Input() public tournament!: TournamentData;
}
