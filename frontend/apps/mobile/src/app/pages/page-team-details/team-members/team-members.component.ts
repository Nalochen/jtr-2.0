import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { TeamData, TeamUserData } from '@jtr/data-domain/store';

import {
  ChipComponent,
  DataContainerExpandableComponent,
  DataContainerRowComponent
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerExpandableComponent,
    DataContainerRowComponent,
    TranslatePipe,
    ChipComponent
  ],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.less',
})
export class TeamMembersComponent implements OnInit {
  @Input() public team!: TeamData;

  protected panelIsOpen = false;
  protected previewMembers: TeamUserData[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.previewMembers = [...this.team.members].slice(0, 6);
  }

  protected togglePanel(isOpen: boolean): void {
    if (this.panelIsOpen !== isOpen) {
      this.panelIsOpen = isOpen;
    }
    this.cdr.detectChanges();
  }

  protected showRole(role: string) {
    switch (role) {
      case 'ADMIN': {
        return 'page-team-details.role-admin';
      }
      case 'MODERATOR': {
        return 'page-team-details.role-moderator';
      }
      default: {
        return '';
      }
    }
  }
}
