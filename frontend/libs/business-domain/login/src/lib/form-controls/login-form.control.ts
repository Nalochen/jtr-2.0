import { FormControl, FormGroup, Validators } from '@angular/forms';

export const loginFormControl = new FormGroup<{
  emailOrUsername: FormControl<string>;
  password: FormControl<string>;
}>({
  emailOrUsername: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  password: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
});
