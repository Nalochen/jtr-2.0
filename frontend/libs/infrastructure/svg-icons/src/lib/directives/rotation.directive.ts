import { Directive, HostBinding, Input } from '@angular/core';

import { IconRotationEnum } from '../enums/rotation.enum';

@Directive({
  selector: '[svgIconRotation]',
})
export class RotationDirective {
  @Input()
  public SvgIconRotation: IconRotationEnum = IconRotationEnum.Default;

  @HostBinding('class.svg-icon--rotation--left')
  private get rotateLeft(): boolean {
    return this.SvgIconRotation === IconRotationEnum.Left;
  }

  @HostBinding('class.svg-icon--rotation--upside-down')
  private get rotateUpsideDown(): boolean {
    return this.SvgIconRotation === IconRotationEnum.UpsideDown;
  }

  @HostBinding('class.svg-icon--rotation--right')
  private get rotateRight(): boolean {
    return this.SvgIconRotation === IconRotationEnum.Right;
  }
}
