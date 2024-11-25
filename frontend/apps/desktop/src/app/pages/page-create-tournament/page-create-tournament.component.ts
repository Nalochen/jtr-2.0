import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { userDetailsSelector } from '@jtr/business-domain/user';
import { UserData} from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import {
  PageCreateTournamentNavigationComponent
} from './page-create-tournament-navigation/page-create-tournament-navigation.component';
import {
  PageTournamentInformationBasicComponent
} from './page-create-tournament-information-basic/page-create-tournament-information-basic.component';
import {
  PageCreateTournamentInformationAdditionalComponent
} from './page-create-tournament-information-additional/page-create-tournament-information-additional.component';
import {
  PageCreateTournamentSubmitComponent
} from './page-create-tournament-submit/page-create-tournament-submit.component';
import {
  PageCreateTournamentInformationAccommodationComponent
} from './page-create-tournament-information-accommodation/page-create-tournament-information-accommodation.component';
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
  createTournamentFormControl
} from '../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { ReactiveFormsModule } from '@angular/forms';
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
    DividerModule
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
