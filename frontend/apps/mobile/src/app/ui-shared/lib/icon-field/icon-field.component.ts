import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  selector: 'app-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['./icon-field.component.less'],
})
export class IconFieldComponent {}
