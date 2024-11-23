import {CommonModule} from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';

import { userDetailsSelector } from '@jtr/business-domain/user';
import { UserData} from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { AuthService } from '../../business-rules/auth/auth.service';
import { PageUserDetailsHeaderComponent } from './page-user-details-header/page-user-details-header.component';
import { TranslatePipe } from '@ngx-translate/core';
import {
  editUserFormControl
} from '../../../../../../libs/business-domain/user/src/lib/form-controls/edit-user-form.control';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    PageUserDetailsHeaderComponent,
    TranslatePipe
  ],
  templateUrl: './page-user-details.component.html',
  styleUrl: './page-user-details.component.less',
})
export class PageUserDetailsComponent implements OnInit, OnDestroy {
  public readonly form = editUserFormControl;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private store$: Store,
    private readonly authService: AuthService,
  ) {}

  @SingletonGetter()
  public get user$(): Observable<UserData|null> {
    return this.store$.select(userDetailsSelector);
  }

  @SingletonGetter()
  public get isLoggedIn$(): boolean {
    return this.authService.isAuthenticated();
  }

  public ngOnInit() {
    this.user$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      console.log('user', user);
      if (user) {
        this.form.controls.profilePicture.setValue(user.picture);

        if (user.name) {
          this.form.controls.name.setValue(user.name);
        } else {
          this.form.controls.name.setValue('');
        }

        this.form.controls.username.setValue(user.username);
        this.form.controls.email.setValue('test');

        if (user.city) {
          this.form.controls.city.setValue(user.city);
        } else {
          this.form.controls.city.setValue('');
        }

        if (user.birthdate) {
          this.form.controls.birthdate.setValue(user.birthdate);
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
}
