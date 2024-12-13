import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { teamOverviewSelector } from '@jtr/business-domain/team';
import { TeamOverviewData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { TeamRowComponent } from './team-row/team-row.component';

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe, ReactiveFormsModule, TeamRowComponent],
  templateUrl: './page-team-overview.component.html',
  styleUrl: './page-team-overview.component.less',
})
export class PageTeamOverviewComponent {
  public filteredTeams$: Observable<TeamOverviewData[]> = this.teams$;
  public searchForm = new FormControl('');

  constructor(private store$: Store) {
    this.searchForm.valueChanges.subscribe((value) => {
      this.filteredTeams$ = this.teams$.pipe(
        map((teams) =>
          teams.filter((team) => {
            if (!value) {
              return false;
            }
            return team.name.toLowerCase().includes(value.toLowerCase());
          }))
      );
    });
  }

  @SingletonGetter()
  public get teams$(): Observable<TeamOverviewData[]> {
    return this.store$.select(teamOverviewSelector);
  }
}
