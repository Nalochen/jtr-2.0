import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {AuthService} from './business-rules/auth/auth.service';

import { LoginOverlayComponent } from './login-overlay/login-overlay.component';
import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum } from './ui-shared';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent, LoginOverlayComponent, OverlayPanelModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly isLoggedIn = false;

  constructor(private readonly authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
}
