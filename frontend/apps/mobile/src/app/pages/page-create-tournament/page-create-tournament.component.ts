import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { firstValueFrom, Observable, Subject } from 'rxjs';

import { Store } from '@ngrx/store';

import { tournamentDetailsSelector } from '@jtr/business-domain/tournament';
import { TournamentData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { TournamentService } from '../../../../../desktop/src/app/business-rules/tournament/tournament.service';

import { createTournamentFormControl } from '../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';
import { PageCreateTournamentInformationAccommodationComponent } from './page-create-tournament-information-accommodation/page-create-tournament-information-accommodation.component';
import { PageCreateTournamentInformationAdditionalComponent } from './page-create-tournament-information-additional/page-create-tournament-information-additional.component';
import { PageTournamentInformationBasicComponent } from './page-create-tournament-information-basic/page-create-tournament-information-basic.component';
import { PageCreateTournamentInformationContactComponent } from './page-create-tournament-information-contact/page-create-tournament-information-contact.component';
import { PageCreateTournamentInformationRegistrationComponent } from './page-create-tournament-information-registration/page-create-tournament-information-registration.component';
import { PageCreateTournamentInformationRulesComponent } from './page-create-tournament-information-rules/page-create-tournament-information-rules.component';
import { PageCreateTournamentSubmitComponent } from './page-create-tournament-submit/page-create-tournament-submit.component';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    PageTournamentInformationBasicComponent,
    PageCreateTournamentInformationAccommodationComponent,
    PageCreateTournamentInformationContactComponent,
    PageCreateTournamentInformationRegistrationComponent,
    PageCreateTournamentInformationRulesComponent,
    PageCreateTournamentInformationAdditionalComponent,
    PageCreateTournamentSubmitComponent,
    ReactiveFormsModule,
    DividerModule,
    TranslatePipe,
  ],
  providers: [DatePipe],
  templateUrl: './page-create-tournament.component.html',
  styleUrl: './page-create-tournament.component.less',
})
export class PageCreateTournamentComponent implements OnDestroy {
  public form = createTournamentFormControl;
  private readonly destroy$ = new Subject<void>();

  private newTournament = true;

  @SingletonGetter()
  public get tournament$(): Observable<TournamentData | null> {
    return this.store$.select(tournamentDetailsSelector);
  }

  constructor(
    private tournamentService: TournamentService,
    private router: Router,
    private readonly store$: Store,
    private readonly datePipe: DatePipe
  ) {
    this.tournament$.pipe().subscribe((tournament) => {
      if (tournament) {
        this.prefillFormValues(tournament);
        this.newTournament = false;
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public async onSubmit(): Promise<void> {
    if (!this.form.valid) {
      this.markAllFieldsAsTouched(this.form);
      return;
    }

    // Create new tournament
    if (this.newTournament) {
      const createTournamentResponse = await firstValueFrom(
        this.tournamentService.create(this.form.getRawValue())
      );

      this.form.reset();

      this.router.navigate([
        '/tournament-details/' + createTournamentResponse.tournamentId,
      ]);

      return;
    }

    // Update existing tournament
    const tournamentId = (await firstValueFrom(this.tournament$))!.id;

    await firstValueFrom(
      this.tournamentService.update(tournamentId, this.form.getRawValue())
    );
  }

  private markAllFieldsAsTouched(form: FormGroup): void {
    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  private prefillFormValues(tournament: TournamentData): void {
    this.form.controls.basic.controls.name.setValue(tournament.name);
    this.form.controls.basic.controls.tournamentStartDate.setValue(
      this.datePipe.transform(
        Date.parse(tournament.date.start),
        'yyyy-MM-dd'
      ) ?? ''
    );
    this.form.controls.basic.controls.tournamentEndDate.setValue(
      this.datePipe.transform(Date.parse(tournament.date.end), 'yyyy-MM-dd') ??
        ''
    );
    this.form.controls.basic.controls.arrivalStartDate.setValue(
      this.datePipe.transform(
        Date.parse(tournament.arrivalDate.start),
        'yyyy-MM-dd'
      )
    );
    this.form.controls.basic.controls.arrivalEndDate.setValue(
      this.datePipe.transform(
        Date.parse(tournament.arrivalDate.end),
        'yyyy-MM-dd'
      )
    );
    this.form.controls.basic.controls.address.setValue(tournament.address);

    this.form.controls.registration.controls.teamCountField.setValue(
      tournament.possibleSpace
    );
    this.form.controls.registration.controls.registrationProcedureType.setValue(
      tournament.registrationProcedure.type
    );
    this.form.controls.registration.controls.registrationProcedureText.setValue(
      tournament.registrationProcedure.text
    );
    this.form.controls.registration.controls.registrationStartDate.setValue(
      this.datePipe.transform(
        Date.parse(tournament.registrationStartDate),
        'yyyy-MM-dd'
      )
    );
    //Todo: Costs
    this.form.controls.registration.controls.deadlines.setValue(
      tournament.deadlines
    );

    this.form.controls.contact.controls.schedule.setValue(
      tournament.schedule || ''
    );
    this.form.controls.contact.controls.contacts.setValue(tournament.contacts);

    //Todo: Accommodation Type is an enum
    this.form.controls.accommodation.controls.accommodationAddress.setValue(
      tournament.accommodation.location
    );
    this.form.controls.accommodation.controls.food.controls.breakfast.setValue(
      tournament.food.morning || null
    );
    this.form.controls.accommodation.controls.food.controls.lunch.setValue(
      tournament.food.noon || null
    );
    this.form.controls.accommodation.controls.food.controls.dinner.setValue(
      tournament.food.evening || null
    );
    this.form.controls.accommodation.controls.food.controls.gastronomy.setValue(
      tournament.food.gastro || null
    );

    this.form.controls.rules.controls.tournamentSystem.setValue(
      tournament.tournamentSystem.text
    );
    this.form.controls.rules.controls.tournamentSystemLink.setValue(
      tournament.tournamentSystem.url
    );
    this.form.controls.rules.controls.pompfCheck.setValue(
      tournament.pompfCheck.text
    );
    this.form.controls.rules.controls.pompfCheckLink.setValue(
      tournament.pompfCheck.url
    );
    this.form.controls.rules.controls.houseRules.setValue(
      tournament.houseRules.text
    );
    this.form.controls.rules.controls.houseRulesLink.setValue(
      tournament.houseRules.url
    );
    this.form.controls.rules.controls.shoes.controls.studded.setValue(
      tournament.shoes.studdedAllowed
    );
    this.form.controls.rules.controls.shoes.controls.cam.setValue(
      tournament.shoes.camAllowed
    );
    this.form.controls.rules.controls.shoes.controls.cleats.setValue(
      tournament.shoes.cleatsAllowed
    );
    this.form.controls.rules.controls.shoes.controls.barefoot.setValue(
      tournament.shoes.barefootAllowed
    );
    this.form.controls.rules.controls.shoes.controls.shoesText.setValue(
      tournament.shoes.text
    );

    this.form.controls.costsText.setValue(tournament.additionalInformation);
  }
}
