import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AccommodationTypeEnum } from '../../../../../../libs/data-domain/tournament/enums/accommodation-type.enum';
import {
  TournamentFoodEveningEnum,
  TournamentFoodGastroEnum,
  TournamentFoodMorningEnum,
  TournamentFoodNoonEnum,
} from '../../../../../../libs/data-domain/tournament/enums/food.enum';
import { PricingTypeEnum } from '../../../../../../libs/data-domain/tournament/enums/pricing-type.enum';

const CREATE_TOURNAMENT_ENDPOINT = '/api/customer-frontend/create-tournament';

export interface CreateTournamentRequestBody {
  additionalInformation: string;
  name: string;
  startDate: string;
  endDate: string;
  startArrivalDate?: string;
  endArrivalDate?: string;
  address: string;
  possibleSpace: number;
  registrationProcedureType: string;
  registrationProcedureText: string;
  registrationStartDate: string;
  registrationCosts?: number;
  registrationCostsType?: PricingTypeEnum;
  depositCosts?: number;
  depositCostsType?: PricingTypeEnum;
  accommodationCosts?: number;
  accommodationCostsType?: PricingTypeEnum;
  guestCosts?: number;
  guestCostsType?: PricingTypeEnum;
  costsText: string;
  deadlines: string;
  schedule: string;
  contacts: string[];
  accommodationType: AccommodationTypeEnum;
  accommodationLocation: string;
  foodMorning: TournamentFoodMorningEnum;
  foodNoon: TournamentFoodNoonEnum;
  foodEvening: TournamentFoodEveningEnum;
  foodGastro: TournamentFoodGastroEnum;
  tournamentSystemText: string;
  tournamentSystemUrl: string;
  pompfCheckText: string;
  pompfCheckUrl: string;
  houseRulesText: string;
  houseRulesUrl: string;
  studdedShoesAllowed: boolean;
  cleatsShoesAllowed: boolean;
  camShoesAllowed: boolean;
  barefootAllowed: boolean;
  shoesText: string;
}

export interface CreateTournamentResponse {
  tournamentId: number;
}

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  constructor(private readonly http: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public create(body: any): Observable<CreateTournamentResponse> {
    const request: CreateTournamentRequestBody = {
      additionalInformation: body.costsText,
      name: body.basic.name,
      startDate: body.basic.tournamentStartDate,
      endDate: body.basic.tournamentEndDate,
      startArrivalDate: body.basic.arrivalStartDate,
      endArrivalDate: body.basic.arrivalEndDate,
      address: body.basic.address,
      possibleSpace:
        body.registration.teamCountButton ?? body.registration.teamCountField,
      registrationProcedureType: body.registration.registrationProcedureType,
      registrationProcedureText: body.registration.registrationProcedureText,
      registrationStartDate: body.registration.registrationStartDate,
      registrationCosts: body.registration.costs.registrationCosts,
      registrationCostsType: body.registration.costs.registrationCostsType,
      depositCosts: body.registration.costs.depositCosts,
      depositCostsType: body.registration.costs.depositCostsType,
      accommodationCosts: body.registration.costs.accommodationCosts,
      accommodationCostsType: body.registration.costs.accommodationCostsType,
      guestCosts: body.registration.costs.guestCosts,
      guestCostsType: body.registration.costs.guestCostsType,
      costsText: body.registration.costs.costsText,
      deadlines: body.registration.deadlines,
      schedule: body.contact.schedule,
      contacts: body.contact.contacts,
      accommodationType: body.accommodation.accommodationType,
      accommodationLocation: body.accommodation.accommodationAddress,
      foodMorning: body.accommodation.food.breakfast,
      foodNoon: body.accommodation.food.lunch,
      foodEvening: body.accommodation.food.dinner,
      foodGastro: body.accommodation.food.gastronomy,
      tournamentSystemText: body.rules.tournamentSystem,
      // tournamentSystemType
      tournamentSystemUrl: body.rules.tournamentSystemLink,
      pompfCheckText: body.rules.pompfCheck,
      pompfCheckUrl: body.rules.pompfCheckLink,
      houseRulesText: body.rules.houseRules,
      houseRulesUrl: body.rules.houseRulesLink,
      studdedShoesAllowed: body.rules.shoes.studded,
      cleatsShoesAllowed: body.rules.shoes.cleats,
      camShoesAllowed: body.rules.shoes.cam,
      barefootAllowed: body.rules.shoes.barefoot,
      shoesText: body.rules.shoes.shoesText,
      //shoesUrl
    };

    return this.http.post<CreateTournamentResponse>(
      CREATE_TOURNAMENT_ENDPOINT,
      request
    );
  }
}
