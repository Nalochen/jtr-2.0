import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[svgIconTransitionAnimation]',
})
export class TransitionAnimationDirective {
  @Input()
  @HostBinding('class.svg-icon-transition-animation')
  private SvgIconTransitionAnimation: boolean = false;
}
