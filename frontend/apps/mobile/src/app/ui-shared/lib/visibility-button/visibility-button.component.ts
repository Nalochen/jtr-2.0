import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonComponent } from '../button/button.component';
import { ButtonColorEnum } from '../button/enums/color.enum';
import { ButtonTypeEnum } from '../button/enums/type.enum';

@Component({
  selector: 'app-visibility-button',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    OverlayPanelModule,
    ButtonComponent,
    TranslatePipe
  ],
  templateUrl: './visibility-button.component.html',
  styleUrl: './visibility-button.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisibilityButtonComponent implements OnInit {
  public readonly control = input.required<FormControl<boolean | null>>();
  public visible = false;

  protected readonly ButtonColorEnum = ButtonColorEnum;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  public ngOnInit(): void {
    const controlValue = this.control().value;

    if(controlValue === null) {
      this.control().setValue(this.visible);
    } else {
      this.visible = controlValue;
    }
  }

  public toggleVisibility(value: boolean): void {
    if(this.visible === value) {
      return;
    }
    this.visible = value;
    this.control().setValue(value);
  }
}