import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTournamentDetailsData } from '@jtr/business-domain/tournament';

@Injectable({
  providedIn: 'root',
})
export class TournamentDetailsResolver implements Resolve<boolean> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const tournamentId = route.paramMap.get('tournamentId');

    if (tournamentId) {
      this.store.dispatch(
        loadTournamentDetailsData({ tournamentId: +tournamentId })
      );
    }

    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }
}
