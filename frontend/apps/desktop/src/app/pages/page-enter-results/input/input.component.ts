import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TournamentTeamData } from '@jtr/data-domain/store';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'results-input',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ReactiveFormsModule,
    DropdownModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit{
  public participatingTeams = input.required<TournamentTeamData[]>();
  public teamOptions: {label: string, value: number}[] = [];
  public unrankedTeams: {name: string, id: number}[] = [];
  public tournamentTeamCount = input.required<number | null>();
  public form = new FormArray<FormGroup<{teamId: FormControl<number | null>; teamScore: FormControl<number | null>}>>([]);

  public ngOnInit() {
    this.teamOptions = this.participatingTeams().map(team => ({label: team.name, value: team.id}));
    this.unrankedTeams = this.participatingTeams().map(team => ({name: team.name, id: team.id}));

    const scoreLength = this.tournamentTeamCount() || 0;

    for (let i = 0; i < scoreLength; i++) {
      this.form.push(new FormGroup({
        teamId: new FormControl<number | null>(null),
        teamScore: new FormControl<number | null>(null)
      }));
    }

    this.form.valueChanges.subscribe(() => {
      this.form.value.forEach((team, index) => {
        team.teamScore = index + 1;
        this.unrankedTeams = this.unrankedTeams.filter(option => option.id !== team.teamId);
      });
    });

  }
}
