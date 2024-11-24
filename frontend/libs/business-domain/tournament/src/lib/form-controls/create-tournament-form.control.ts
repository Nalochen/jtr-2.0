import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationProcedureEnum } from '../../../../../data-domain/tournament/enums/registration-procedure.enum';
import { PricingTypeEnum } from '../../../../../data-domain/tournament/enums/pricing-type.enum';
import { AccommodationTypeEnum } from '../../../../../data-domain/tournament/enums/accommodation-type.enum';
import {
  GastronomyAvailabilityEnum,
  MealAvailabilityEnum
} from '../../../../../data-domain/tournament/enums/food-type.enum';

export type CostsInformationForm = {
  registrationFee: FormControl<number | null>;
  registrationFeePricingType: FormControl<PricingTypeEnum | null>;
  deposit: FormControl<number | null>;
  depositPricingType: FormControl<PricingTypeEnum | null>;
  accommodation: FormControl<number | null>;
  accommodationPricingType: FormControl<PricingTypeEnum | null>;
  guests: FormControl<number | null>;
  guestsPricingType: FormControl<PricingTypeEnum | null>;
  additionalText: FormControl<string | null>;
}

export type FoodInformationForm = {
  breakfast: FormControl<MealAvailabilityEnum | null>;
  lunch: FormControl<MealAvailabilityEnum | null>;
  dinner: FormControl<MealAvailabilityEnum | null>;
  gastronomy: FormControl<GastronomyAvailabilityEnum | null>;
};

export type ShoesInformationForm = {
  studded: FormControl<boolean | null>;
  cam: FormControl<boolean | null>;
  cleats: FormControl<boolean | null>;
  barefoot: FormControl<boolean | null>;
  shoesText: FormControl<string | null>;
};

export type BasicInformationForm = {
  name: FormControl<string | null>;
  tournamentStartDate: FormControl<Date | null>;
  tournamentEndDate: FormControl<Date | null>;
  arrivalStartDate: FormControl<Date | null>;
  arrivalEndDate: FormControl<Date | null>;
  address: FormControl<string | null>;
};

export type RegistrationInformationForm = {
  teamCount: FormControl<number | null>;
  registrationProcedure: FormControl<RegistrationProcedureEnum | null>
  registrationProcedureText: FormControl<string | null>;
  registrationStart: FormControl<Date | null>;
  costs: FormGroup<CostsInformationForm>;
  deadlines: FormControl<string | null>
};

export type AccommodationInformationForm = {
  accommodationType: FormControl<AccommodationTypeEnum | null>;
  accommodationAddress: FormControl<string | null>;
  food: FormGroup<FoodInformationForm>;
};

export type RulesInformationForm = {
  tournamentSystem: FormControl<string | null>;
  tournamentSystemLink: FormControl<string | null>;
  pompfCheck: FormControl<string | null>;
  pompfCheckLink: FormControl<string | null>;
  houseRules: FormControl<string | null>;
  houseRulesLink: FormControl<string | null>;
  shoes: FormGroup<ShoesInformationForm>;
};

export type CreateTournamentForm = {
  basic: FormGroup<BasicInformationForm>;
  registration: FormGroup<RegistrationInformationForm>;
  accommodation: FormGroup<AccommodationInformationForm>;
  rules: FormGroup<RulesInformationForm>;
  additionalText: FormControl<string | null>;
};

export const basicInformationFormControl = new FormGroup<BasicInformationForm>({
  name: new FormControl(null, [Validators.required]),
  tournamentStartDate: new FormControl(null, [Validators.required]),
  tournamentEndDate: new FormControl(null, [Validators.required]),
  arrivalStartDate: new FormControl(null, [Validators.required]),
  arrivalEndDate: new FormControl(null, [Validators.required]),
  address: new FormControl(null, [Validators.required]),
});

export const registrationInformationFormControl = new FormGroup<RegistrationInformationForm>({
  teamCount: new FormControl(null, [Validators.required]),
  registrationProcedure: new FormControl(null, [Validators.required]),
  registrationProcedureText: new FormControl(null),
  registrationStart: new FormControl(null, [Validators.required]),
  costs: new FormGroup<CostsInformationForm>({
    registrationFee: new FormControl(null, [Validators.required]),
    registrationFeePricingType: new FormControl(null, [Validators.required]),
    deposit: new FormControl(null, [Validators.required]),
    depositPricingType: new FormControl(null, [Validators.required]),
    accommodation: new FormControl(null, [Validators.required]),
    accommodationPricingType: new FormControl(null, [Validators.required]),
    guests: new FormControl(null, [Validators.required]),
    guestsPricingType: new FormControl(null, [Validators.required]),
    additionalText: new FormControl(null),
  }),
  deadlines: new FormControl(null, [Validators.required]),
});

export const  accommodationInformationFormControl = new FormGroup<AccommodationInformationForm>({
  accommodationType: new FormControl(null, [Validators.required]),
  accommodationAddress: new FormControl(null, [Validators.required]),
  food: new FormGroup<FoodInformationForm>({
    breakfast: new FormControl(null, [Validators.required]),
    lunch: new FormControl(null, [Validators.required]),
    dinner: new FormControl(null, [Validators.required]),
    gastronomy: new FormControl(null, [Validators.required]),
  }),
});

export const rulesInformationFormControl = new FormGroup<RulesInformationForm>({
  tournamentSystem: new FormControl(null, [Validators.required]),
  tournamentSystemLink: new FormControl(null, [Validators.required]),
  pompfCheck: new FormControl(null, [Validators.required]),
  pompfCheckLink: new FormControl(null, [Validators.required]),
  houseRules: new FormControl(null, [Validators.required]),
  houseRulesLink: new FormControl(null, [Validators.required]),
  shoes: new FormGroup<ShoesInformationForm>({
    studded: new FormControl(null, [Validators.required]),
    cam: new FormControl(null, [Validators.required]),
    cleats: new FormControl(null, [Validators.required]),
    barefoot: new FormControl(null, [Validators.required]),
    shoesText: new FormControl(null),
  })
});

export const createTournamentFormControl = new FormGroup<CreateTournamentForm>({
  basic: basicInformationFormControl,
  registration: registrationInformationFormControl,
  accommodation: accommodationInformationFormControl,
  rules: rulesInformationFormControl,
  additionalText: new FormControl(null),
});