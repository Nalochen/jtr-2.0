import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { firstValueFrom, Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { userDetailsSelector } from '@jtr/business-domain/user';
import { UserData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { AuthService } from './business-rules/auth/auth.service';
import { UserService } from './business-rules/user/user.service';

import { LoginOverlayComponent } from './login-overlay/login-overlay.component';
import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum } from './ui-shared';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ButtonComponent,
    LoginOverlayComponent,
    OverlayPanelModule,
    TranslatePipe,
    AsyncPipe,
    NgOptimizedImage,
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
    private readonly userService: UserService,
    private readonly translate: TranslateService,
    private readonly router: Router,
    private readonly store$: Store
  ) {
    const savedLanguage = sessionStorage.getItem('language') || 'de';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  @SingletonGetter()
  public get isLoggedIn$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  @SingletonGetter()
  public get user$(): Observable<UserData | null> {
    return this.store$.select(userDetailsSelector);
  }

  public logout(): void {
    this.authService.logout();

    this.router.navigate(['/']);
  }

  public async switchLanguage(language: string): Promise<void> {
    this.translate.use(language);
    sessionStorage.setItem('language', language);

    if (await firstValueFrom(this.isLoggedIn$)) {
      await firstValueFrom(this.userService.updateUserLanguage({ language }));
    }
  }

  public navigateToHome() {
    this.router.navigate(['/']);
  }

  public navigateToUserDetails() {
    this.router.navigate(['manage-user-details']);
  }
}
