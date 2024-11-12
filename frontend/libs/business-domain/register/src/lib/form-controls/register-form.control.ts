import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PasswordsMatchValidator } from './passwords-match.validator';

export const registerForm = new FormGroup<{
  email: FormControl<string | null>,
  username: FormControl<string | null>,
  password: FormControl<string |null>,
  confirmPassword: FormControl<string | null>,
  name: FormControl<string | null>,
  nameVisibility: FormControl<boolean | null>,
  city: FormControl<string | number | null>,
  cityVisibility: FormControl<boolean | null>,
  birthdate: FormControl<Date | null>,
  birthdateVisibility: FormControl<boolean | null>,
}>({
  email: new FormControl('', [Validators.required, Validators.email]),
  username: new FormControl('', [Validators.required, Validators.minLength(2)]),
  password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  confirmPassword: new FormControl('', [Validators.required]),
  name: new FormControl(null),
  nameVisibility: new FormControl(null),
  city: new FormControl(null),
  cityVisibility: new FormControl(null),
  birthdate: new FormControl(null),
  birthdateVisibility: new FormControl(null),
}, { validators: PasswordsMatchValidator });