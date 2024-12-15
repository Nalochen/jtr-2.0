import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';

import { TournamentData } from '@jtr/data-domain/store';

import {
  DataContainerComponent,
  DataContainerRowComponent,
  InfoButtonComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'tournament-information-rules',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerComponent,
    DataContainerRowComponent,
    InfoButtonComponent,
    MatDividerModule,
    TranslatePipe,
    InputSwitchModule,
    ReactiveFormsModule,
  ],
  templateUrl: './tournament-information-rules.component.html',
  styleUrl: './tournament-information-rules.component.less',
})
export class TournamentInformationRulesComponent implements OnInit {
  @Input() public tournament!: TournamentData;

  protected form = new FormGroup({
    nubbedShoesAllowed: new FormControl(false),
    cleadedShoesAllowed: new FormControl(false),
    studdedShoesAllowed: new FormControl(false),
    barefootAllowed: new FormControl(false),
  });

  public ngOnInit(): void {
    this.form.setValue({
      nubbedShoesAllowed: this.tournament.shoes.camAllowed,
      cleadedShoesAllowed: this.tournament.shoes.cleatsAllowed,
      studdedShoesAllowed: this.tournament.shoes.studdedAllowed,
      barefootAllowed: this.tournament.shoes.barefootAllowed,
    });
  }
}
