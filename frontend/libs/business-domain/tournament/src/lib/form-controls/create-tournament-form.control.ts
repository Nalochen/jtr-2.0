import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PricingTypeEnum } from '../../../../../data-domain/tournament/enums/pricing-type.enum';
import {
  TournamentFoodEvening, TournamentFoodGastro,
  TournamentFoodMorning,
  TournamentFoodNoon
} from '../../../../../data-domain/tournament/enums/food.enum';
import { AccommodationTypeEnum } from '../../../../../data-domain/tournament/enums/accommodation-type.enum';
import {
  TournamentRegistrationProcedureEnum
} from '../../../../../data-domain/tournament/enums/registration-procedure.enum';


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
  breakfast: FormControl<TournamentFoodMorning | null>;
  lunch: FormControl<TournamentFoodNoon | null>;
  dinner: FormControl<TournamentFoodEvening | null>;
  gastronomy: FormControl<TournamentFoodGastro | null>;
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
  tournamentStartDate: FormControl<string | null>;
  tournamentEndDate: FormControl<string | null>;
  arrivalStartDate: FormControl<string | null>;
  arrivalEndDate: FormControl<string | null>;
  address: FormControl<string | null>;
};

export type RegistrationInformationForm = {
  teamCountButton: FormControl<number | null>;
  teamCountField: FormControl<number | null>;
  registrationProcedure: FormControl<TournamentRegistrationProcedureEnum | null>
  registrationProcedureText: FormControl<string | null>;
  registrationStart: FormControl<string | null>;
  costs: FormGroup<CostsInformationForm>;
  deadlines: FormControl<string | null>
};

export type ContactInformationForm = {
  schedule: FormControl<string | null>;
  contacts: FormArray<FormControl<string | null>>;
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
  contact: FormGroup<ContactInformationForm>;
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
  teamCountButton: new FormControl(null),
  teamCountField: new FormControl(null),
  registrationProcedure: new FormControl(null, [Validators.required]),
  registrationProcedureText: new FormControl(null),
  registrationStart: new FormControl(null, [Validators.required]),
  costs: new FormGroup<CostsInformationForm>({
    registrationFee: new FormControl(0),
    registrationFeePricingType: new FormControl(null),
    deposit: new FormControl(0),
    depositPricingType: new FormControl(null),
    accommodation: new FormControl(0),
    accommodationPricingType: new FormControl(null),
    guests: new FormControl(0),
    guestsPricingType: new FormControl(null),
    additionalText: new FormControl(null),
  }),
  deadlines: new FormControl(null),
});

export const contactInformationFormControl = new FormGroup<ContactInformationForm>({
  schedule: new FormControl(null),
  contacts: new FormArray<FormControl<string | null>>([])
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
  contact: contactInformationFormControl,
  accommodation: accommodationInformationFormControl,
  rules: rulesInformationFormControl,
  additionalText: new FormControl(null),
});
