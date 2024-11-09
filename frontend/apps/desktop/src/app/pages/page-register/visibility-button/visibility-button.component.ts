import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonComponent, ButtonColorEnum, ButtonTypeEnum } from '../../../ui-shared';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'visibility-button',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, OverlayPanelModule, ButtonComponent],
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
    this.control().setValue(this.visible);
  }

  public toggleVisibility(value: boolean): void {
    if(this.visible === value) {
      return;
    }
    this.visible = value;
    this.control().setValue(value);
  }
}
