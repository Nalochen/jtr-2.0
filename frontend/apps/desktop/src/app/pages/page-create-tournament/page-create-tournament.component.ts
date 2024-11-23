import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { userDetailsSelector } from '@jtr/business-domain/user';
import { UserData} from '@jtr/data-domain/store';
import { SingletonGetter } from '@jtr/infrastructure/cache';


@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-create-tournament.component.html',
  styleUrl: './page-create-tournament.component.less',
})
export class PageCreateTournamentComponent {}
