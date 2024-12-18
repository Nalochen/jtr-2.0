import { Component, ViewChild } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { Observable } from 'rxjs';

import { SingletonGetter } from '@jtr/infrastructure/cache';

import { AuthService } from './business-rules/auth/auth.service';

import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum } from './ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  standalone: true,
  providers: [provideAnimations()],
  imports: [
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    OverlayMenuComponent,
    TranslatePipe,
    ButtonComponent,
    OverlayPanelModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  @SingletonGetter()
  public get isLoggedIn$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
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

    this.router.navigate(['/']);
  }
}
