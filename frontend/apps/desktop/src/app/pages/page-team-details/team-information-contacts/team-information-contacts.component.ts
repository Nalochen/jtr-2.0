import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input} from '@angular/core';

import { TeamData } from '@jtr/data-domain/store';

import { DataContainerComponent, DataContainerRowComponent } from '../../../ui-shared';

@Component({
  selector: 'team-contacts',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DataContainerRowComponent, DataContainerComponent],
  templateUrl: './team-information-contacts.component.html',
  styleUrl: './team-information-contacts.component.less',
})
export class TeamInformationContactsComponent {
  @Input() public team!: TeamData;
}
