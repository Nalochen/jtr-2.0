import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { ButtonComponent } from '../button/button.component';
import { ButtonFunctionType } from '../button/enums/function-type.enum';
import { ButtonTypeEnum } from '../button/enums/type.enum';
import { ButtonColorEnum } from '../button/enums/color.enum';
import { DialogModule } from 'primeng/dialog';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, DialogModule, ButtonComponent],
  selector: 'app-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfoButtonComponent {
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonFunctionType = ButtonFunctionType;
  public visible = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  public showDialog() {
    this.visible = true;
    this.changeDetectorRef.markForCheck();
  }

  public hideDialog() {
    this.visible = false;
    this.changeDetectorRef.markForCheck();
  }
}

