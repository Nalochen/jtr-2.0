import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

import {MatDividerModule} from '@angular/material/divider';

import {TournamentData} from '@jtr/data-domain/store';

import {DataContainerComponent, DataContainerRowComponent, InfoButtonComponent} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tournament-information-rules',
  standalone: true,
  imports: [CommonModule, DataContainerComponent, DataContainerRowComponent, InfoButtonComponent, MatDividerModule, TranslatePipe, InputSwitchModule, ReactiveFormsModule],
  templateUrl: './tournament-information-rules.component.html',
  styleUrl: './tournament-information-rules.component.less',
})
export class TournamentInformationRulesComponent {
    @Input() public tournament!: TournamentData;
    protected form = new FormGroup({
      nubbedShoesAllowed: new FormControl(this.tournament.shoes.camAllowed),
      cleadedShoesAllowed: new FormControl(this.tournament.shoes.cleatsAllowed),
      studdedShoesAllowed: new FormControl(this.tournament.shoes.studdedAllowed),
      barefootAllowed: new FormControl(this.tournament.shoes.barefootAllowed),
    })
}
