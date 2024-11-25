import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  createTournamentFormControl
} from '../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import {
  PageCreateTournamentInformationAccommodationComponent
} from './page-create-tournament-information-accommodation/page-create-tournament-information-accommodation.component';
import {
  PageCreateTournamentInformationAdditionalComponent
} from './page-create-tournament-information-additional/page-create-tournament-information-additional.component';
import {
  PageTournamentInformationBasicComponent
} from './page-create-tournament-information-basic/page-create-tournament-information-basic.component';
import {
  PageCreateTournamentInformationContactComponent
} from './page-create-tournament-information-contact/page-create-tournament-information-contact.component';
import {
  PageCreateTournamentInformationRegistrationComponent
} from './page-create-tournament-information-registration/page-create-tournament-information-registration.component';
import {
  PageCreateTournamentInformationRulesComponent
} from './page-create-tournament-information-rules/page-create-tournament-information-rules.component';
import {
  PageCreateTournamentNavigationComponent
} from './page-create-tournament-navigation/page-create-tournament-navigation.component';
import {
  PageCreateTournamentSubmitComponent
} from './page-create-tournament-submit/page-create-tournament-submit.component';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    PageCreateTournamentNavigationComponent,
    PageTournamentInformationBasicComponent,
    PageCreateTournamentInformationAccommodationComponent,
    PageCreateTournamentInformationContactComponent,
    PageCreateTournamentInformationRegistrationComponent,
    PageCreateTournamentInformationRulesComponent,
    PageCreateTournamentInformationAdditionalComponent,
    PageCreateTournamentSubmitComponent,
    ReactiveFormsModule,
    DividerModule,
    TranslatePipe
  ],
  templateUrl: './page-create-tournament.component.html',
  styleUrl: './page-create-tournament.component.less',
})
export class PageCreateTournamentComponent {
  public form = createTournamentFormControl;

  public onSubmit() {
    console.log('submit');
  }
}
