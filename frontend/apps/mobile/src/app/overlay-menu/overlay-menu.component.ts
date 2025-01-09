import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { SingletonGetter } from '@jtr/infrastructure/cache';

import { AuthService } from '../business-rules/auth/auth.service';

import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum } from '../ui-shared';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.less'],
  imports: [CommonModule, ButtonComponent],
  standalone: true,
})
export class OverlayMenuComponent {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;

  public isOpen = false;

  @Output() public menuClose = new EventEmitter<void>();

  constructor(
    private translate: TranslateService,
    private router: Router,
    private authService: AuthService
  ) {
    const savedLanguage = sessionStorage.getItem('language') || 'de';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  public openMenu() {
    this.isOpen = true;
  }

  public closeMenu() {
    this.isOpen = false;
    this.menuClose.emit();
  }

  public onRedirectToTournaments() {
    this.router.navigate(['/tournament-overview']);
    this.closeMenu();
  }

  public onRedirectToTeams() {
    this.router.navigate(['/teams-overview']);
    this.closeMenu();
  }

  public onRedirectToAccount() {
    this.router.navigate(['/manage-user-details']);
    this.closeMenu();
  }

  public onRedirectToLinks() {
    //this.router.navigate(['']);
    this.closeMenu();
  }

  public onRedirectToLogin() {
    this.router.navigate(['/login']);
    this.closeMenu();
  }

  public onRedirectToAboutUs() {
    //this.router.navigate(['']);
    this.closeMenu();
  }

  public onRedirectToImpressum() {
    //this.router.navigate(['']);
    this.closeMenu();
  }

  @SingletonGetter()
  public get isLoggedIn$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  public logout(): void {
    this.authService.logout();

    this.router.navigate(['/']);
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
    sessionStorage.setItem('language', language);
    this.closeMenu();
  }
}
