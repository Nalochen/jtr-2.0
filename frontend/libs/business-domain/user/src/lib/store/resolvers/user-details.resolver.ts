import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { loadUserDetailsDataAction } from '@jtr/business-domain/user';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsResolver implements Resolve<boolean> {
  constructor(private store$: Store) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const escapedUsername = route.paramMap.get('escapedUsername');

    this.store$.dispatch(
      loadUserDetailsDataAction({
        escapedUsername: escapedUsername || undefined,
      })
    );

    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }
}
