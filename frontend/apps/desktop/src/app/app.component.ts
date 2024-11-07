import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import {AuthService} from './business-rules/auth/auth.service';

@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  constructor(private readonly authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
}
