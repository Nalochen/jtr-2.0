import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { ButtonComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'team-own-tournaments',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent, TranslatePipe],
  templateUrl: './team-own-tournaments.component.html',
  styleUrl: './team-own-tournaments.component.less',
})
export class TeamOwnTournamentsComponent {
  @Input() public team!: TeamData;
}
