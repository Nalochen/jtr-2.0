import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';

import { TournamentData } from '@jtr/data-domain/store';

import {
  ChipComponent,
  DataContainerExpandableComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { AccommodationTypeEnum, PricingTypeEnum } from '@jtr/data-domain/tournament-data';

@Component({
  selector: 'tournament-information-location',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerExpandableComponent,
    DataContainerRowComponent,
    MatDividerModule,
    ChipComponent,
    TranslatePipe,
  ],
  templateUrl: './tournament-information-location.component.html',
  styleUrl: './tournament-information-location.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationLocationComponent extends DataContainerExpandableComponent {
  @Input() public tournament!: TournamentData;
  protected readonly PricingTypeEnum = PricingTypeEnum;

  public get chipText(): string {
    switch (this.tournament.accommodation?.type) {
      case AccommodationTypeEnum.CAMPING:
        return 'page-tournament-details.accommodation-type-camping';
      case AccommodationTypeEnum.GYM:
        return 'page-tournament-details.accommodation-type-gym';
      case AccommodationTypeEnum.NONE:
        return 'page-tournament-details.accommodation-type-none';
      default:
        return 'page-tournament-details.accommodation-type-other';
    }
  }
}
