import { Component, ViewChild } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';

@Component({
  standalone: true,
  providers: [provideAnimations()],
  imports: [
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    OverlayMenuComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  @ViewChild('overlay') public overlay!: OverlayMenuComponent;

  public openOverlay() {
    this.overlay.openMenu();
  }

  public closeOverlay() {
    this.overlay.closeMenu();
  }
}
