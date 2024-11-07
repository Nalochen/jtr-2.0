import { Component, Input, ElementRef, Renderer2, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  selector: 'app-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfoButtonComponent {
  @Input() public position: 'top' | 'bottom' | 'left' | 'right' = 'top'; // Default position
  public isTooltipVisible = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public toggleTooltip(): void {
    this.isTooltipVisible = !this.isTooltipVisible;
  }

  @HostListener('document:click', ['$event'])
  public onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isTooltipVisible = false;
    }
  }
}

