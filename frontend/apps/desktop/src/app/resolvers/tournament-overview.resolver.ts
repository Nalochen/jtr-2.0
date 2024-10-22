import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTournamentOverviewData } from '@jtr/business-domain/tournament';

@Injectable({
  providedIn: 'root',
})
export class TournamentOverviewResolver implements Resolve<boolean> {
  constructor(private store: Store) {}

  resolve(): Observable<boolean> {
    this.store.dispatch(loadTournamentOverviewData());

    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }
}
