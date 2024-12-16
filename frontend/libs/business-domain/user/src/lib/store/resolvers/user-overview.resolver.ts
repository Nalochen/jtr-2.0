import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { loadUserOverviewData } from '@jtr/business-domain/user';

@Injectable({
  providedIn: 'root',
})
export class UserOverviewResolver implements Resolve<boolean> {
  constructor(private store$: Store) {}

  public resolve(): Observable<boolean> {
    this.store$.dispatch(loadUserOverviewData());

    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }
}
