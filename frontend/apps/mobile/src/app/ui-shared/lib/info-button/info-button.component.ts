import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { ButtonComponent } from '../button/button.component';
import { ButtonTypeEnum, ButtonColorEnum } from '../../../infrastructure/button-style/button-style.enum';
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
  public visible: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  public showDialog() {
    this.visible = true;
    this.changeDetectorRef.markForCheck();
  }
}

