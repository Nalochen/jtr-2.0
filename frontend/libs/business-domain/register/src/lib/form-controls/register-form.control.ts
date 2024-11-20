import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PasswordsMatchValidator } from './passwords-match.validator';

export const registerForm = new FormGroup<{
  birthdate: FormControl<string | null>;
  isBirthdateVisible: FormControl<boolean>;
  city: FormControl<string>;
  isCityVisible: FormControl<boolean>;
  confirmPassword: FormControl<string>;
  email: FormControl<string>;
  name: FormControl<string>;
  isNameVisible: FormControl<boolean>;
  password: FormControl<string>;
  username: FormControl<string>;
}>(
  {
    birthdate: new FormControl(null),
    isBirthdateVisible: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    city: new FormControl('', { nonNullable: true }),
    isCityVisible: new FormControl(true, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    name: new FormControl('', { nonNullable: true }),
    isNameVisible: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
  },
  { validators: PasswordsMatchValidator }
);
