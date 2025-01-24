import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import {
  AccommodationTypeEnum,
  PricingTypeEnum,
  TournamentFoodEveningEnum,
  TournamentFoodGastroEnum,
  TournamentFoodMorningEnum,
  TournamentFoodNoonEnum,
  TournamentRegistrationProcedureTypeEnum,
} from '@jtr/data-domain/tournament-data';

export const teamCountMissingValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const teamCountButton = control.get('teamCountButton');
  const teamCountInputField = control.get('teamCountField');

  return !!teamCountButton?.value || !!teamCountInputField?.value
    ? null
    : { teamCountMissing: true };
};

export type CostsInformationForm = {
  registrationCosts: FormControl<number | null>;
  registrationCostsType: FormControl<PricingTypeEnum | null>;
  depositCosts: FormControl<number | null>;
  depositCostsType: FormControl<PricingTypeEnum | null>;
  accommodationCosts: FormControl<number | null>;
  accommodationCostsType: FormControl<PricingTypeEnum | null>;
  guestCosts: FormControl<number | null>;
  guestCostsType: FormControl<PricingTypeEnum | null>;
  costsText: FormControl<string>;
};

export type FoodInformationForm = {
  breakfast: FormControl<TournamentFoodMorningEnum | null>;
  lunch: FormControl<TournamentFoodNoonEnum | null>;
  dinner: FormControl<TournamentFoodEveningEnum | null>;
  gastronomy: FormControl<TournamentFoodGastroEnum | null>;
};

export type ShoesInformationForm = {
  studded: FormControl<boolean>;
  cam: FormControl<boolean>;
  cleats: FormControl<boolean>;
  barefoot: FormControl<boolean>;
  shoesText: FormControl<string | null>;
};

export type BasicInformationForm = {
  name: FormControl<string>;
  tournamentStartDate: FormControl<string>;
  tournamentEndDate: FormControl<string>;
  arrivalStartDate: FormControl<string | null>;
  arrivalEndDate: FormControl<string | null>;
  address: FormControl<string>;
};

export type RegistrationInformationForm = {
  teamCountButton: FormControl<number | null>;
  teamCountField: FormControl<number | null>;
  registrationProcedureType: FormControl<TournamentRegistrationProcedureTypeEnum | null>;
  registrationProcedureText: FormControl<string | null>;
  registrationStartDate: FormControl<string | null>;
  costs: FormGroup<CostsInformationForm>;
  deadlines: FormControl<string>;
};

export type ContactInformationForm = {
  schedule: FormControl<string | null>;
  contacts: FormArray<FormControl<string>>;
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
  name: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  tournamentStartDate: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  tournamentEndDate: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  arrivalStartDate: new FormControl(null),
  arrivalEndDate: new FormControl(null),
  address: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
});

export const registrationInformationFormControl =
  new FormGroup<RegistrationInformationForm>(
    {
      teamCountButton: new FormControl(null),
      teamCountField: new FormControl(null),
      registrationProcedureType: new FormControl(
        TournamentRegistrationProcedureTypeEnum.FIRST_COME,
        [Validators.required]
      ),
      registrationProcedureText: new FormControl(null),
      registrationStartDate: new FormControl(null, [Validators.required]),
      costs: new FormGroup<CostsInformationForm>({
        registrationCosts: new FormControl(0, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        registrationCostsType: new FormControl(null),
        depositCosts: new FormControl(0, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        depositCostsType: new FormControl(null),
        accommodationCosts: new FormControl(0, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        accommodationCostsType: new FormControl(null),
        guestCosts: new FormControl(0, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        guestCostsType: new FormControl(null),
        costsText: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
      }),
      deadlines: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    },
    { validators: teamCountMissingValidator }
  );

export const contactInformationFormControl =
  new FormGroup<ContactInformationForm>({
    schedule: new FormControl(null),
    contacts: new FormArray<FormControl<string>>([]),
  });

export const accommodationInformationFormControl =
  new FormGroup<AccommodationInformationForm>({
    accommodationType: new FormControl(null, [Validators.required]),
    accommodationAddress: new FormControl(''),
    food: new FormGroup<FoodInformationForm>({
      breakfast: new FormControl(null, [Validators.required]),
      lunch: new FormControl(null, [Validators.required]),
      dinner: new FormControl(null, [Validators.required]),
      gastronomy: new FormControl(null, [Validators.required]),
    }),
  });

export const rulesInformationFormControl = new FormGroup<RulesInformationForm>({
  tournamentSystem: new FormControl(''),
  tournamentSystemLink: new FormControl(''),
  pompfCheck: new FormControl(''),
  pompfCheckLink: new FormControl(''),
  houseRules: new FormControl(''),
  houseRulesLink: new FormControl(''),
  shoes: new FormGroup<ShoesInformationForm>({
    studded: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    cam: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    cleats: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    barefoot: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    shoesText: new FormControl(''),
  }),
});

export const createTournamentFormControl = new FormGroup<CreateTournamentForm>({
  basic: basicInformationFormControl,
  registration: registrationInformationFormControl,
  contact: contactInformationFormControl,
  accommodation: accommodationInformationFormControl,
  rules: rulesInformationFormControl,
  additionalText: new FormControl(''),
});
