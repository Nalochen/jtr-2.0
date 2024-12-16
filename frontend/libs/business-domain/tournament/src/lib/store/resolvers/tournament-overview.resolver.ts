import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { loadTournamentOverviewData } from '@jtr/business-domain/tournament';

@Injectable({
  providedIn: 'root',
})
export class TournamentOverviewResolver implements Resolve<boolean> {
  constructor(private store$: Store) {}

  public resolve(): Observable<boolean> {
    this.store$.dispatch(loadTournamentOverviewData());

    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }
}
