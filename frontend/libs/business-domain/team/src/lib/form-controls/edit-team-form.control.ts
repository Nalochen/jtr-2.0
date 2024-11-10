import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TeamUserData, UserRole } from '@jtr/data-domain/store';

export const editTeamForm = new FormGroup<EditTeamForm>({
  aboutUs: new FormControl(null),
  city: new FormControl(null),
  contacts: new FormArray<FormControl<string | null>>([]),
  isMixTeam: new FormControl(null),
  logo: new FormControl(null),
  members: new FormArray<FormControl<TeamUserDataForm>>([]),
  name: new FormControl(null),
  trainingTime: new FormControl(null),
});

export type EditTeamForm = {
  aboutUs: FormControl<string | null>,
  city: FormControl<string | null>,
  contacts: FormArray<FormControl<string | null>>,
  isMixTeam: FormControl<boolean | null>,
  logo: FormControl<string | null>,
  members: FormArray<FormControl<TeamUserDataForm>>,
  name: FormControl<string | null>,
  trainingTime: FormControl<string | null>,
};

export type TeamUserDataForm = {
  id: FormControl<number | null>,
  name: FormControl<string | null>,
  role: FormControl<UserRole | null>,
}
