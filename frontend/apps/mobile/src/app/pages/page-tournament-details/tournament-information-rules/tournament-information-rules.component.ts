import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TournamentData } from '@jtr/data-domain/store';

import {
  DataContainerExpandableComponent,
  DataContainerRowComponent,
  InfoButtonComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'tournament-information-rules',
  standalone: true,
  imports: [
    CommonModule,
    DataContainerExpandableComponent,
    DataContainerRowComponent,
    InfoButtonComponent,
    DividerModule,
    TranslatePipe,
    InputSwitchModule,
    ReactiveFormsModule,
  ],
  templateUrl: './tournament-information-rules.component.html',
  styleUrl: './tournament-information-rules.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationRulesComponent
  extends DataContainerExpandableComponent
  implements OnInit
{
  @Input() public tournament!: TournamentData;

  protected form = new FormGroup({
    nubbedShoesAllowed: new FormControl({ value: false, disabled: true }),
    cleadedShoesAllowed: new FormControl({ value: false, disabled: true }),
    studdedShoesAllowed: new FormControl({ value: false, disabled: true }),
    barefootAllowed: new FormControl({ value: false, disabled: true }),
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
