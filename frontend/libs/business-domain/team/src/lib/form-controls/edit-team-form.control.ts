import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserRole } from '@jtr/data-domain/store';

export const editTeamForm = new FormGroup<EditTeamForm>({
  id: new FormControl(null, {nonNullable: true, validators: [Validators.required]}),
  aboutUs: new FormControl('', {nonNullable: true}),
  city: new FormControl('', {nonNullable: true}),
  contacts: new FormArray<FormControl<string | null>>([]),
  isMixTeam: new FormControl(false, {nonNullable: true, validators: [Validators.required]}),
  members: new FormArray<FormControl<TeamUserDataForm>>([]),
  name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  trainingTime: new FormControl('', {nonNullable: false}),
});

export type EditTeamForm = {
  id: FormControl<number | null>;
  aboutUs: FormControl<string | null>;
  city: FormControl<string | null>;
  contacts: FormArray<FormControl<string | null>>;
  isMixTeam: FormControl<boolean | null>;
  members: FormArray<FormControl<TeamUserDataForm>>;
  name: FormControl<string | null>;
  trainingTime: FormControl<string | null>;
};

export type TeamUserDataForm = {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  role: FormControl<UserRole | null>;
};
