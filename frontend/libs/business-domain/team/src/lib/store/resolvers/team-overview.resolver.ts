import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { loadTeamOverviewData } from '@jtr/business-domain/team';

@Injectable({
  providedIn: 'root',
})
export class TeamOverviewResolver implements Resolve<boolean> {
  constructor(private store: Store) {}

  public resolve(): Observable<boolean> {
    this.store.dispatch(loadTeamOverviewData());

    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }
}
