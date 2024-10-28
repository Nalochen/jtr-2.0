import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component } from '@angular/core';

import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

import { DataContainerComponent, TeamComponent } from '../../../ui-shared';

@Component({
  selector: 'tournament-teams',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatDivider, DataContainerComponent, TeamComponent, MatIcon],
  templateUrl: './tournament-teams.component.html',
  styleUrl: './tournament-teams.component.less',
})
export class TournamentTeamsComponent {
  public registeredTeams: string[] = [
    'Munich Monks',
    'Rigor Mortis',
    'Blue Fangs',
    'Jugger Helden Bamberg',
    'Flying Juggmen',
    'Juggernauts',
    'Aixcalibur',
    'Cranium Ex Machina',
    'Lahnveilchen Gießen',
    'Torpedo Bääm',
    'Zonenkinder',
  ];

  public reservedTeams: string[] = [
    'NLG',
    'Peters Pawns',
    'Quadratur des Kreises',
    'Quak Pack',
    'Leere Menge',
    'Rhein-Neckar-Donner',
  ];
}
