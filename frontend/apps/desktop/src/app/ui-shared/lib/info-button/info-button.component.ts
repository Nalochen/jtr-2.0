import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  standalone: true,
  imports: [CommonModule, MatButtonModule, OverlayPanelModule, MatButtonModule],
  selector: 'app-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfoButtonComponent {}

