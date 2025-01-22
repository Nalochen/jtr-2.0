import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import {
  ChipComponent,
  DataContainerComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    DataContainerRowComponent,
    TranslatePipe,
    ChipComponent,
  ],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.less',
})
export class TeamMembersComponent {
  @Input() public team!: TeamData;

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
