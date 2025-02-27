import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { userDetailsSelector } from '@jtr/business-domain/user';
import { UserData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { AuthService } from '../../business-rules/auth/auth.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonJustifyContentEnum,
  ButtonTypeEnum,
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../ui-shared';
import { PageUserDetailsHeaderComponent } from './page-user-details-header/page-user-details-header.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    PageUserDetailsHeaderComponent,
    TranslatePipe,
    ButtonComponent,
    DataContainerRowComponent,
    DataContainerComponent,
    NgOptimizedImage,
  ],
  templateUrl: './page-user-details.component.html',
  styleUrl: './page-user-details.component.less',
})
export class PageUserDetailsComponent {
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonJustifyContentEnum = ButtonJustifyContentEnum;

  constructor(
    private store$: Store,
    private readonly authService: AuthService
  ) {}

  @SingletonGetter()
  public get user$(): Observable<UserData | null> {
    return this.store$.select(userDetailsSelector);
  }

  @SingletonGetter()
  public get isLoggedIn$(): boolean {
    return this.authService.isAuthenticated();
  }

  public navigateToTeam(teamId: number): void {
    window.open(`team-details/${teamId}`, '_self');
  }

  public addUserToTeam(): void {
    window.alert('User added to team');
  }
}
