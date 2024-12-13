import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { userDetailsSelector } from '@jtr/business-domain/user';
import { editUserFormControl } from '@jtr/business-domain/user';
import { UserData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import { AuthService } from '../../business-rules/auth/auth.service';

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
  ],
  templateUrl: './page-manage-user-details.component.html',
  styleUrl: './page-manage-user-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  public ngOnInit() {
    this.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      if (user) {
        this.form.controls.profilePicture.setValue(user.picture);

        if (user.name) {
          this.form.controls.name.setValue(user.name);
          this.form.controls.isNameVisible.setValue(user.isNameVisible);
        } else {
          this.form.controls.name.setValue('');
        }

        this.form.controls.username.setValue(user.username);

        if (user.pronouns) {
          this.form.controls.pronouns.setValue(user.pronouns);
        }

        if (user.city) {
          this.form.controls.city.setValue(user.city);
          this.form.controls.isCityVisible.setValue(user.isCityVisible);
        } else {
          this.form.controls.city.setValue('');
        }

        if (user.birthdate) {
          this.form.controls.birthdate.setValue(user.birthdate);
          this.form.controls.isBirthdateVisible.setValue(
            user.isBirthdateVisible
          );
        } else {
          this.form.controls.birthdate.setValue('');
        }
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public navigateToTeam(teamId: number): void {
    window.open(`team-details/${teamId}`, '_self');
  }

  public onFoundNewTeam(): void {
    window.alert('Found new team');
  }

  public onDeleteAccount(): void {
    window.alert('Delete Account');
  }

  public onSubmit() {
    window.alert('Submit');
  }
}
