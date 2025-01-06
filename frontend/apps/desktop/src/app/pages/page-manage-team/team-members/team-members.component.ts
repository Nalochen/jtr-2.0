import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { concatLatestFrom } from '@ngrx/operators';
import { Store } from '@ngrx/store';

import { teamDetailsSelector } from '@jtr/business-domain/team';
import { userOverviewSelector } from '@jtr/business-domain/user';
import { TeamData, UserOverviewData } from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
  DataContainerComponent,
  DataContainerRowComponent} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    DataContainerRowComponent,
    ReactiveFormsModule,
    TranslatePipe,
    ButtonComponent,
    DialogModule,
    DropdownModule,
    FormsModule,
    OverlayPanelModule,
  ],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamMembersComponent {
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected isAddMemberOverlayVisible = false;
  protected selectedUser: UserOverviewData | null = null;
  protected possibleUsers: UserOverviewData[] = [];
  protected items: MenuItem[] | undefined;


  constructor(private readonly store$: Store) {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
          }
        ]
      }
    ];

    this.users$.pipe(
      concatLatestFrom(() => this.team$),
    ).subscribe(([users, team]) => {
      if (users && team) {
        this.possibleUsers = users.filter(user => !team.members.some(member => member.id === user.id));
      }
    });
  }

  @SingletonGetter()
  public get team$(): Observable<TeamData | null> {
    return this.store$.select(teamDetailsSelector);
  }

  @SingletonGetter()
  public get users$(): Observable<UserOverviewData[] | null> {
    return this.store$.select(userOverviewSelector);
  }

  public onAddMember() {
    //add Member to team
    //Seite neu laden
  }

  public openAddMemberOverlay() {
    this.isAddMemberOverlayVisible = true;
  }

  public closeAddMemberOverlay() {
    this.isAddMemberOverlayVisible = false;
  }
}
