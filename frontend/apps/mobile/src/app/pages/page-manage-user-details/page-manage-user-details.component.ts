import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { firstValueFrom, Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { userDetailsSelector } from '@jtr/business-domain/user';
import { editUserFormControl } from '@jtr/business-domain/user';
import { UserData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { AuthService } from '../../business-rules/auth/auth.service';
import { UserService } from '../../business-rules/user/user.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonFunctionType,
  ButtonJustifyContentEnum,
  ButtonTypeEnum,
  InfoButtonComponent,
  VisibilityButtonComponent,
} from '../../ui-shared';
import { PageManageUserDetailsHeaderComponent } from './page-user-details-header/page-manage-user-details-header.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    PageManageUserDetailsHeaderComponent,
    TranslatePipe,
    ButtonComponent,
    InfoButtonComponent,
    ReactiveFormsModule,
    VisibilityButtonComponent,
    PageManageUserDetailsHeaderComponent,
    NgOptimizedImage,
  ],
  templateUrl: './page-manage-user-details.component.html',
  styleUrl: './page-manage-user-details.component.less',
})
export class PageManageUserDetailsComponent implements OnInit, OnDestroy {
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonFunctionTypeEnum = ButtonFunctionType;
  public readonly ButtonJustifyContentEnum = ButtonJustifyContentEnum;
  public readonly form = editUserFormControl;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private store$: Store,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  @SingletonGetter()
  public get user$(): Observable<UserData | null> {
    return this.store$.select(userDetailsSelector);
  }

  @SingletonGetter()
  public get isLoggedIn$(): boolean {
    return this.authService.isAuthenticated();
  }

  public ngOnInit() {
    this.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      if (user) {
        this.form.controls.username.setValue(user.username);
        this.form.controls.email.setValue(user.email || '');
        this.form.controls.name.setValue(user.name || '');
        this.form.controls.isNameVisible.setValue(user.isNameVisible);
        this.form.controls.birthdate.setValue(user.birthdate || '');
        this.form.controls.isBirthdateVisible.setValue(user.isBirthdateVisible);
        this.form.controls.profilePicture.setValue(user.pictureUrl);
        this.form.controls.pronouns.setValue(user.pronouns || '');
        this.form.controls.city.setValue(user.city || '');
        this.form.controls.isCityVisible.setValue(user.isCityVisible);
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public navigateToTeam(teamId: number): void {
    this.router.navigate(['team-details', teamId]);
  }

  public onFoundNewTeam(): void {
    window.alert('Found new team');
  }

  public async onDeleteAccount(): Promise<void> {
    await this.userService.delete();

    this.router.navigate(['/tournament-overview']);
  }

  public async onSubmit(): Promise<void> {
    await firstValueFrom(
      this.userService.update({
        birthdate: this.form.controls.birthdate.value,
        city: this.form.controls.city.value,
        email: this.form.controls.email.value,
        name: this.form.controls.name.value,
        pronouns: this.form.controls.pronouns.value,
        username: this.form.controls.username.value,
      })
    );
  }
}
