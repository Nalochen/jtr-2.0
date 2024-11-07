import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

export const registerForm = new FormGroup<{
  email: FormControl<string | null>,
  username: FormControl<string | null>,
  password: FormControl<string |null>,
  confirmPassword: FormControl<string | null>,
  name: FormControl<string | null>,
  city: FormControl<string | number | null>,
  birthdate: FormControl<Date | null>,
}>({
  email: new FormControl('', [Validators.required, Validators.email]),
  username: new FormControl('', [Validators.required, Validators.minLength(2)]),
  password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  confirmPassword: new FormControl('', [Validators.required]),
  name: new FormControl(null),
  city: new FormControl(null),
  birthdate: new FormControl(null),
})
