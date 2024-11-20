import { Component, ViewChild } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import {AuthService} from './business-rules/auth/auth.service';

import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { ButtonComponent } from './ui-shared';

import { ButtonColorEnum, ButtonTypeEnum } from './infrastructure/button-style/button-style.enum';

@Component({
  standalone: true,
  providers: [provideAnimations()],
  imports: [
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    OverlayMenuComponent,
    TranslatePipe,
    ButtonComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(private readonly authService: AuthService) {}

  @SingletonGetter()
  public get isLoggedIn$(): boolean {
    return this.authService.isAuthenticated();
  }

  @ViewChild('overlay') public overlay!: OverlayMenuComponent;

  public openOverlay() {
    this.overlay.openMenu();
  }

  public closeOverlay() {
    this.overlay.closeMenu();
  }

  public logout(): void {
    this.authService.logout();
  }
}
