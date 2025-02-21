import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { loadTeamDetailsData } from '@jtr/business-domain/team';

@Injectable({
  providedIn: 'root',
})
export class TeamDetailsResolver implements Resolve<boolean> {
  constructor(private store$: Store) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const escapedName = route.paramMap.get('escapedName');

    if (escapedName) {
      this.store$.dispatch(loadTeamDetailsData({ escapedName: escapedName }));
    }

    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }
}
