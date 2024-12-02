import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Observable, Subject } from 'rxjs';

import { Store } from '@ngrx/store';

import {
  tournamentDetailsSelector
} from '@jtr/business-domain/tournament';
import { TournamentData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

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
  providers: [DatePipe],
  templateUrl: './page-create-tournament.component.html',
  styleUrl: './page-create-tournament.component.less',
})
export class PageCreateTournamentComponent implements OnDestroy {
  public form = createTournamentFormControl;
  private readonly destroy$ = new Subject<void>();

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData|null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  constructor(
    private readonly store$: Store,
    private readonly datePipe: DatePipe
  ) {
    this.tournament$.pipe().subscribe((tournament) => {
      if (tournament) {
        this.form.controls.basic.controls.name.setValue(tournament.name);
        this.form.controls.basic.controls.tournamentStartDate.setValue(this.datePipe.transform(Date.parse(tournament.date.start), 'yyyy-MM-dd'));
        this.form.controls.basic.controls.tournamentEndDate.setValue(this.datePipe.transform(Date.parse(tournament.date.end), 'yyyy-MM-dd'));
        //Todo: Arrival time
        this.form.controls.basic.controls.arrivalStartDate.setValue(this.datePipe.transform(Date.parse(tournament.arrivalTime), 'yyyy-MM-dd'));
        this.form.controls.basic.controls.arrivalEndDate.setValue(this.datePipe.transform(Date.parse(tournament.arrivalTime), 'yyyy-MM-dd'));
        this.form.controls.basic.controls.address.setValue(tournament.address);

        this.form.controls.registration.controls.teamCountField.setValue(tournament.possibleSpace);
        this.form.controls.registration.controls.registrationProcedure.setValue(tournament.registrationProcedure.type);
        this.form.controls.registration.controls.registrationProcedureText.setValue(tournament.registrationProcedure.text);
        this.form.controls.registration.controls.registrationStart.setValue(this.datePipe.transform(Date.parse(tournament.registrationOpenAt), 'yyyy-MM-dd'));
        //Todo: Costs
        //Todo: Deadlines are only one string
        this.form.controls.registration.controls.deadlines.setValue(tournament.deadlines.join(', '));

        this.form.controls.contact.controls.schedule.setValue(tournament.schedule || '');
        this.form.controls.contact.controls.contacts.setValue(tournament.contacts);

        //Todo: Accommodation Type is an enum
        this.form.controls.accommodation.controls.accommodationAddress.setValue(tournament.accommodation.text);
        this.form.controls.accommodation.controls.food.controls.breakfast.setValue(tournament.food.morning || null);
        this.form.controls.accommodation.controls.food.controls.lunch.setValue(tournament.food.noon || null);
        this.form.controls.accommodation.controls.food.controls.dinner.setValue(tournament.food.evening || null);
        this.form.controls.accommodation.controls.food.controls.gastronomy.setValue(tournament.food.gastro || null);

        this.form.controls.rules.controls.tournamentSystem.setValue(tournament.tournamentSystem.text);
        this.form.controls.rules.controls.tournamentSystemLink.setValue(tournament.tournamentSystem.url);
        this.form.controls.rules.controls.pompfCheck.setValue(tournament.pompfCheck.text);
        this.form.controls.rules.controls.pompfCheckLink.setValue(tournament.pompfCheck.url);
        this.form.controls.rules.controls.houseRules.setValue(tournament.houseRules.text);
        this.form.controls.rules.controls.houseRulesLink.setValue(tournament.houseRules.url);
        this.form.controls.rules.controls.shoes.controls.studded.setValue(tournament.shoes.studdedAllowed);
        this.form.controls.rules.controls.shoes.controls.cam.setValue(tournament.shoes.camAllowed);
        this.form.controls.rules.controls.shoes.controls.cleats.setValue(tournament.shoes.cleatsAllowed);
        this.form.controls.rules.controls.shoes.controls.barefoot.setValue(tournament.shoes.barefootAllowed);
        this.form.controls.rules.controls.shoes.controls.shoesText.setValue(tournament.shoes.text);

        this.form.controls.additionalText.setValue(tournament.additionalInformation);
      }

      console.log(this.form);
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit() {
    window.alert('Form submitted');
  }
}
