import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.less'],
  imports: [CommonModule],
  standalone: true,
})
export class OverlayMenuComponent {
  public isOpen = false;

  @Output() public menuClose = new EventEmitter<void>();

  public openMenu() {
    this.isOpen = true;
  }

  public closeMenu() {
    this.isOpen = false;
    this.menuClose.emit();
  }
}
