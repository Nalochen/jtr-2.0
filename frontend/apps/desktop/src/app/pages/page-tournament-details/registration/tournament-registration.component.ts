import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'tournament-registration',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatButtonModule],
  templateUrl: './tournament-registration.component.html',
  styleUrl: './tournament-registration.component.less',
})
export class TournamentRegistrationComponent {}
