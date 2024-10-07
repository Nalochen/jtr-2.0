import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TournamentDetailsHeaderComponent} from "./header/tournament-details-header.component";

@Component({
  selector: 'app-tournament-details',
  standalone: true,
  imports: [CommonModule, TournamentDetailsHeaderComponent],
  templateUrl: './tournament-details.component.html',
  styleUrl: './tournament-details.component.css',
})
export class TournamentDetailsComponent {}
