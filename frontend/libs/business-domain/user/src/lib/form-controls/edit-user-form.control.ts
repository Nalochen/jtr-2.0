import { FormControl, FormGroup } from '@angular/forms';

export type EditUserForm = {
  profilePicture: FormControl<string | null>;
  name: FormControl<string | null>;
  isNameVisible: FormControl<boolean | null>;
  username: FormControl<string | null>;
  pronouns: FormControl<string | null>;
  email: FormControl<string | null>;
  city: FormControl<string | null>;
  isCityVisible: FormControl<boolean | null>;
  birthdate: FormControl<string | null>;
  isBirthdateVisible: FormControl<boolean | null>;
};

export const editUserFormControl = new FormGroup<EditUserForm>({
  profilePicture: new FormControl(''),
  name: new FormControl(''),
  isNameVisible: new FormControl(null),
  username: new FormControl(''),
  pronouns: new FormControl(''),
  email: new FormControl(''),
  city: new FormControl(''),
  isCityVisible: new FormControl(null),
  birthdate: new FormControl(''),
  isBirthdateVisible: new FormControl(null),
});
