import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'register-data',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatIconModule],
  templateUrl: './register-data.component.html',
  styleUrl: './register-data.component.less',
})
export class RegisterDataComponent {}
