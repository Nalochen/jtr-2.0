import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';

import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-info-button',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTooltipModule, MatButtonModule],
  templateUrl: './info-button.component.html',
  styleUrl: './info-button.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoButtonComponent {
  @Input() public infoText = '';
  public readonly dialog = inject(MatDialog);

  public openTooltipDialog(): void {
    this.dialog.open(DialogComponent, {
      backdropClass: 'dialog-backdrop',
      data: this.infoText,
    });
  }

}
