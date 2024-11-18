import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from './business-rules/auth/auth.service';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { LoginOverlayComponent } from './login-overlay/login-overlay.component';
import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum } from './ui-shared';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SingletonGetter } from '@jtr/infrastructure/cache';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ButtonComponent,
    LoginOverlayComponent,
    OverlayPanelModule,
    TranslatePipe,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(
    private readonly authService: AuthService,
    private translate: TranslateService
  ) {
    const savedLanguage = sessionStorage.getItem('language') || 'de';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  @SingletonGetter()
  public get isLoggedIn$(): boolean {
    return this.authService.isAuthenticated();
  }

  public logout(): void {
    this.authService.logout();
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
    sessionStorage.setItem('language', language);
  }
}
