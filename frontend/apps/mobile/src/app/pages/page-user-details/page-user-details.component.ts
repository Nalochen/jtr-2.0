import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { userDetailsSelector } from '@jtr/business-domain/user';
import { UserData} from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';


@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-user-details.component.html',
  styleUrl: './page-user-details.component.less',
})
export class PageUserDetailsComponent {
  constructor(private store$: Store) {}

  @SingletonGetter()
  public get user$(): Observable<UserData|null> {
    return this.store$.select(userDetailsSelector);
  }
}
