import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { loadTeamDetailsData, loadTeamOverviewData } from '@jtr/business-domain/team';

@Injectable({
  providedIn: 'root',
})
export class ManageTeamDetailsResolver implements Resolve<boolean> {
  constructor(private store: Store) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const teamId = route.paramMap.get('teamId');

    if (teamId) {
      this.store.dispatch(
        loadTeamDetailsData({ teamId: +teamId })
      );
    }

    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }
}
