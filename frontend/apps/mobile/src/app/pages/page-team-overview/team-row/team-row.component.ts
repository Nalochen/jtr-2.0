import { CommonModule, DecimalPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { TeamOverviewData } from '@jtr/data-domain/store';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
  DataContainerComponent,
} from '../../../ui-shared';
import { TeamArrowComponent } from '../team-arrow/team-arrow.component';

@Component({
  selector: 'team-row',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    ButtonComponent,
    TeamArrowComponent,
    DecimalPipe,
  ],
  templateUrl: './team-row.component.html',
  styleUrl: './team-row.component.less',
})
export class TeamRowComponent {
  constructor(private readonly router: Router) {}

  @Input() public team!: TeamOverviewData;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  public navigateToTeam(): void {
    this.router.navigate(['team-details', this.team.escapedName]);
  }
}
