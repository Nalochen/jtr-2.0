import { FormControl, FormGroup } from '@angular/forms';

export type EditUserForm = {
  profilePicture: FormControl<string | null>;
  name: FormControl<string | null>;
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  city: FormControl<string | null>;
  birthdate: FormControl<string | null>;
};

export const editUserFormControl = new FormGroup<EditUserForm>({
  profilePicture: new FormControl(''),
  name: new FormControl(''),
  username: new FormControl(''),
  email: new FormControl(''),
  city: new FormControl(''),
  birthdate: new FormControl(''),
});
