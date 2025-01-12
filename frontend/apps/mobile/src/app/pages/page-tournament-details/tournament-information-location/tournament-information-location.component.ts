import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TournamentData } from '@jtr/data-domain/store';
import { AccommodationTypeEnum, PricingTypeEnum } from '@jtr/data-domain/tournament-data';

import {
  ChipComponent,
  DataContainerExpandableComponent,
  DataContainerRowComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'tournament-information-location',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerExpandableComponent,
    DataContainerRowComponent,
    DividerModule,
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

  public get foodEveningText(): string {
    switch (this.tournament.food?.evening) {
      case 'provided':
        return 'page-tournament-details.food-evening-provided';
      case 'grill_available':
        return 'page-tournament-details.food-evening-grill-available';
      default:
        return 'page-tournament-details.food-evening-no';
    }
  }

  public get foodGastroText(): string {
    switch (this.tournament.food?.gastro) {
      case 'on_the_course':
        return 'page-tournament-details.food-gastro-on-the-course';
      case 'near':
        return 'page-tournament-details.food-gastro-near';
      case 'far':
        return 'page-tournament-details.food-gastro-far';
      default:
        return 'page-tournament-details.food-gastro-no';
    }
  }

  public get foodMorningText(): string {
    switch (this.tournament.food?.morning) {
      case 'provided':
        return 'page-tournament-details.food-morning-provided';
      default:
        return 'page-tournament-details.food-morning-no';
    }
  }

  public get foodNoonText(): string {
    switch (this.tournament.food?.noon) {
      case 'provided':
        return 'page-tournament-details.food-noon-provided';
      case 'snacks':
        return 'page-tournament-details.food-noon-snacks';
      default:
        return 'page-tournament-details.food-noon-no';
    }
  }
}
