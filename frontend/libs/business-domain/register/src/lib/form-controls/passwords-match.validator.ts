import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PasswordsMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value ? { passwordsMismatch: true } : null;
};
