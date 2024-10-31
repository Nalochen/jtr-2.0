import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogModule, MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';

import { ButtonColorEnum, ButtonSizeEnum } from '../../../infrastructure/button-style/button-style.enum';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ButtonComponent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  public readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  public readonly data = inject<string>(MAT_DIALOG_DATA);

  public readonly color = ButtonColorEnum.Primary;
  public readonly size = ButtonSizeEnum.FitContent;

  public closeDialog() {
    this.dialogRef.close();
  }
}