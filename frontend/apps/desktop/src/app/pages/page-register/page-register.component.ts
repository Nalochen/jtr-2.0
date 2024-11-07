import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { registerForm } from '../../business-domain/register/register-form.control';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent, InfoButtonComponent } from '../../ui-shared';


@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, InfoButtonComponent, ButtonComponent],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.less',
})
export class PageRegisterComponent {
  protected readonly form = registerForm;

  protected readonly cityInfoText = 'Hier kannst du die Stadt angeben, aus der du kommst oder die in der du trainierst.'
  protected readonly nameInfoText = 'Dein Anzeige-Name. Trage hier am besten den Namen ein, unter dem dich die meisten Menschen in der Community kennen'
  protected readonly birthdateInfoText = 'Dein Geburtsdatum wird nur gespeichert, damit du später auf der Turnierseite schneller nach Turnieren filtern kannst, die für deine Altersgruppe freigegeben sind.'
  protected readonly usernameInfoText = 'Dein Benutzername muss eine eindeutige Abfolge von Zahlen und Buchstaben sein, damit dich jeder eindeutig zuordnen kann.'

  constructor() {}

  public onSubmit(): void {
    if (this.form.valid) {
      console.log('Form is valid');
    }
  }
}
