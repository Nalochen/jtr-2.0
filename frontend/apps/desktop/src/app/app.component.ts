import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {AuthService} from './business-rules/auth/auth.service';
import { ButtonComponent, ButtonColorEnum, ButtonTypeEnum } from './ui-shared';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(private readonly authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
}
