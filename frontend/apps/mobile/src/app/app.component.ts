import { Component } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  providers: [provideAnimations()],
  imports: [
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {}
