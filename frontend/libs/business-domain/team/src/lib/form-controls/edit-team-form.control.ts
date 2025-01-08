import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { UserRole } from '@jtr/data-domain/store';

export const editTeamForm = new FormGroup<EditTeamForm>({
  id: new FormControl(null, {nonNullable: true, validators: [Validators.required]}),
  aboutUs: new FormControl('', {nonNullable: true}),
  city: new FormControl('', {nonNullable: true}),
  contacts: new FormArray<FormControl<string | null>>([]),
  isMixTeam: new FormControl(false, {nonNullable: true, validators: [Validators.required]}),
  name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  trainingTime: new FormControl('', {nonNullable: false}),
}, {validators: mixteamOrCityValidator()});

export type EditTeamForm = {
  id: FormControl<number | null>;
  aboutUs: FormControl<string | null>;
  city: FormControl<string | null>;
  contacts: FormArray<FormControl<string | null>>;
  isMixTeam: FormControl<boolean | null>;
  name: FormControl<string | null>;
  trainingTime: FormControl<string | null>;
};

export type TeamUserDataForm = {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  role: FormControl<UserRole | null>;
};

export function mixteamOrCityValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isMixTeam = control.get('isMixTeam')?.value;
    const city = control.get('city')?.value;

    if (!isMixTeam && !city) {
      return {mixteamOrCityRequired: true};
    }

    return null;
  };
}
