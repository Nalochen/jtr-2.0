import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

import { ButtonColorEnum, ButtonTypeEnum } from '../../../infrastructure/button-style/button-style.enum';

import { ButtonComponent } from '../../../ui-shared';


@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.less',
})
export class ScrollToTopComponent {
  public windowScrolled = false;
  public ButtonTypeEnum = ButtonTypeEnum;
  public ButtonColorEnum = ButtonColorEnum;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    if (window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.scrollY || this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  public scrollToTop() {
    (function smoothScroll(): void {
      const currentScroll: number = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
