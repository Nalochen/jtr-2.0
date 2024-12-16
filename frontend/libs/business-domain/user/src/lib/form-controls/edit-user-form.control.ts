import { FormControl, FormGroup, Validators } from '@angular/forms';

export type EditUserForm = {
  profilePicture: FormControl<string>;
  name: FormControl<string | null>;
  isNameVisible: FormControl<boolean>;
  username: FormControl<string>;
  pronouns: FormControl<string | null>;
  email: FormControl<string | null>;
  city: FormControl<string | null>;
  isCityVisible: FormControl<boolean>;
  birthdate: FormControl<string | null>;
  isBirthdateVisible: FormControl<boolean>;
};

export const editUserFormControl = new FormGroup<EditUserForm>({
  profilePicture: new FormControl('', {
    nonNullable: true,
  }),
  name: new FormControl(''),
  isNameVisible: new FormControl(true, {
    nonNullable: true,
    validators: [Validators.required],
  }),
  username: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  pronouns: new FormControl(''),
  email: new FormControl(''),
  city: new FormControl(''),
  isCityVisible: new FormControl(true, {
    nonNullable: true,
    validators: [Validators.required],
  }),
  birthdate: new FormControl(''),
  isBirthdateVisible: new FormControl(true, {
    nonNullable: true,
    validators: [Validators.required],
  }),
});
