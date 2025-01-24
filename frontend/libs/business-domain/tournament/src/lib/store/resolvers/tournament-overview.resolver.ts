import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { loadTournamentOverviewDataAction } from '@jtr/business-domain/tournament';

@Injectable({
  providedIn: 'root',
})
export class TournamentOverviewResolver implements Resolve<boolean> {
  constructor(private store$: Store) {}

  public resolve(): Observable<boolean> {
    this.store$.dispatch(loadTournamentOverviewDataAction());

    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }
}
