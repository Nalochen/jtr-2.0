import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { UserService } from '../../../business-rules/user/user.service';

import {
  DataContainerExpandableComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerExpandableComponent,
    DataContainerRowComponent,
  ],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.less',
})
export class TeamMembersComponent {
  constructor(private readonly userService: UserService) {}

  @Input() public team!: TeamData;

  public getPictureUrl(picture: string): string {
    return this.userService.getPictureUrl(picture);
  }
}
