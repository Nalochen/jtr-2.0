import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { DataContainerComponent, TeamComponent } from '../../../ui-shared';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'tournament-teams',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatDivider, DataContainerComponent, TeamComponent, MatIcon],
  templateUrl: './tournament-teams.component.html',
  styleUrl: './tournament-teams.component.less',
})
export class TournamentTeamsComponent {
  public registeredTeams: string[] = [
    "Munich Monks",
    "Rigor Mortis",
    "Blue Fangs",
    "Jugger Helden Bamberg",
    "Flying Juggmen",
    "Juggernauts",
    "Aixcalibur",
    "Cranium Ex Machina",
    "Lahnveilchen Gießen",
    "Torpedo Bääm",
    "Zonenkinder",
  ];

  public reservedTeams: string[] = [
    "NLG",
    "Peters Pawns",
    "Quadratur des Kreises",
    "Quak Pack",
    "Leere Menge",
    "Rhein-Neckar-Donner",
  ];
}
