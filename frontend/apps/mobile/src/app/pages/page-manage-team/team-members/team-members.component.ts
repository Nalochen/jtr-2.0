import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { teamDetailsSelector } from '@jtr/business-domain/team';

import {
  DataContainerComponent,
  DataContainerRowComponent,
  ButtonColorEnum,
  ButtonTypeEnum, ButtonComponent
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { TeamData, UserOverviewData } from '@jtr/data-domain/store';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { concatLatestFrom } from '@ngrx/operators';
import { SingletonGetter } from '@jtr/infrastructure/cache';
import { userOverviewSelector } from '@jtr/business-domain/user';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

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
    OverlayPanelModule,
    DialogModule,
    DropdownModule,
    FormsModule
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
