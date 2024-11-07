import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import {AuthService} from './business-rules/auth/auth.service';

import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule, TranslatePipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  constructor(
    private readonly authService: AuthService,
    private translate: TranslateService
  ) {
    const savedLanguage = sessionStorage.getItem('language') || 'de';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  public logout(): void {
    this.authService.logout();
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
    sessionStorage.setItem('language', language);
  }
}
