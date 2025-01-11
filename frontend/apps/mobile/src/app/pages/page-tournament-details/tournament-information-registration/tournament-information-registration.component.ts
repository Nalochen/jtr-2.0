import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TournamentData } from '@jtr/data-domain/store';
import { PricingTypeEnum } from '@jtr/data-domain/tournament-data';

import {
  ChipComponent,
  DataContainerExpandableComponent,
  DataContainerRowComponent
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'tournament-information-registration',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerRowComponent,
    DataContainerExpandableComponent,
    DividerModule,
    TranslatePipe,
    ChipComponent,
  ],
  templateUrl: './tournament-information-registration.component.html',
  styleUrl: './tournament-information-registration.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationRegistrationComponent extends DataContainerExpandableComponent {
  @Input() public tournament!: TournamentData;

  public readonly PricingTypeEnum = PricingTypeEnum;

  public get chipText(): string {
    switch (this.tournament.registrationProcedure?.type) {
      case 'first_come':
        return 'page-tournament-details.registration-procedure-first-come';
      case 'lots':
        return 'page-tournament-details.registration-procedure-lots';
      default:
        return 'page-tournament-details.registration-procedure-other';
    }
  }
}
