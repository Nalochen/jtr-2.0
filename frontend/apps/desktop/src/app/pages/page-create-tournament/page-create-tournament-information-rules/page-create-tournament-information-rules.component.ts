import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import {
  RulesInformationForm
} from '../../../../../../../libs/business-domain/tournament/src/lib/form-controls/create-tournament-form.control';

@Component({
  selector: 'page-create-tournament-information-rules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-create-tournament-information-rules.component.html',
  styleUrl: './page-create-tournament-information-rules.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateTournamentInformationRulesComponent {
  @Input() form!: FormGroup<RulesInformationForm>;
}
