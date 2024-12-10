import { FormControl, FormGroup, Validators } from '@angular/forms';

export const loginFormControl = new FormGroup<{
  emailOrUsername: FormControl<string | null>;
  password: FormControl<string | null>;
}>({
  emailOrUsername: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
});
