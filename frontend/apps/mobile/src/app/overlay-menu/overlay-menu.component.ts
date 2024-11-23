import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Output } from '@angular/core';

import { ButtonColorEnum, ButtonTypeEnum } from '../infrastructure/button-style/button-style.enum';

import { ButtonComponent } from '../ui-shared';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.less'],
  imports: [CommonModule, ButtonComponent],
  standalone: true,
})
export class OverlayMenuComponent {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;

  public isOpen = false;

  @Output() public menuClose = new EventEmitter<void>();

  constructor(
    private translate: TranslateService
  ) {
    const savedLanguage = sessionStorage.getItem('language') || 'de';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  public openMenu() {
    this.isOpen = true;
  }

  public closeMenu() {
    this.isOpen = false;
    this.menuClose.emit();
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
    sessionStorage.setItem('language', language);
    this.closeMenu();
  }
}
