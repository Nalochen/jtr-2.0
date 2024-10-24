import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

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
export class AppComponent {
  title = 'mobile';
}
