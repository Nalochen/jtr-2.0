import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose, MatDialogContent,
  MatDialogModule,
  MatDialogRef, MatDialogTitle
} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-info-button',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTooltipModule],
  templateUrl: './info-button.component.html',
  styleUrl: './info-button.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoButtonComponent {
  @Input() infoText = '';
  public readonly dialog = inject(MatDialog);

  public openTooltipDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.infoText,
    });
  }

}
