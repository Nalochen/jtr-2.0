import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, Observable, startWith } from 'rxjs';
import { Store } from '@ngrx/store';
import { teamOverviewSelector } from '@jtr/business-domain/team';
import { TeamOverviewData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { IconFieldComponent } from '../../ui-shared';
import { TeamRowComponent } from './team-row/team-row.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe, ReactiveFormsModule, TeamRowComponent, IconFieldComponent],
  templateUrl: './page-team-overview.component.html',
  styleUrl: './page-team-overview.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTeamOverviewComponent {
  public dataSource: TeamOverviewData[] = [];
  public searchForm = new FormControl('');

  @SingletonGetter()
  public get teams$(): Observable<TeamOverviewData[]> {
    return this.store$.select(teamOverviewSelector);
  }

  constructor(private store$: Store, private readonly destroyRef: DestroyRef, private readonly changeDetectorRef: ChangeDetectorRef) {
    combineLatest([this.teams$, this.searchForm.valueChanges.pipe(startWith(''))])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([teams, search]: [TeamOverviewData[], string | null]) => {
        search = search?.toLowerCase() || '';

        if (search === '') {
          this.dataSource = teams;
          this.changeDetectorRef.markForCheck();
          return;
        }

        this.dataSource = teams.filter((team) => {
          return team.name.toLowerCase().includes(search);
        });
        this.changeDetectorRef.markForCheck();
      });
  }
}
