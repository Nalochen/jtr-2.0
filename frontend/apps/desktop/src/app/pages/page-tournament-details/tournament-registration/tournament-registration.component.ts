import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, Input} from '@angular/core';

import { ButtonComponent } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'tournament-registration',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent, TranslatePipe],
  templateUrl: './tournament-registration.component.html',
  styleUrl: './tournament-registration.component.less',
})
export class TournamentRegistrationComponent {
    @Input() public registrationOpenAt!: string;
}
