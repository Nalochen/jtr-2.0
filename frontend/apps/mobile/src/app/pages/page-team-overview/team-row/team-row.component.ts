import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TeamOverviewData } from '@jtr/data-domain/store';

import { ButtonColorEnum, ButtonComponent, ButtonTypeEnum,DataContainerComponent } from '../../../ui-shared';
import { TeamArrowComponent } from '../team-arrow/team-arrow.component';

@Component({
  selector: 'team-row',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerComponent, ButtonComponent, TeamArrowComponent],
  templateUrl: './team-row.component.html',
  styleUrl: './team-row.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamRowComponent {
  @Input() public team!: TeamOverviewData;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  public navigateToTeam(): void {
    window.open(`/team-details/${this.team.id}`, '_self');
  }
}
