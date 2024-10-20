import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DataContainerComponent, DataContainerRowComponent, ChipComponent, InfoButtonComponent, ButtonComponent } from '../../../ui-shared';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'tournament-information-categories',
  standalone: true,
  providers: [],
  imports: [
    CommonModule,
    NgOptimizedImage,
    DataContainerComponent,
    DataContainerRowComponent,
    MatIcon,
    MatButtonModule,
    ChipComponent,
    InfoButtonComponent,
    MatDividerModule,
    ButtonComponent
  ],
  templateUrl: './tournament-information-categories.component.html',
  styleUrl: './tournament-information-categories.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentInformationCategoriesComponent {
  protected panels = [
    { id: 'registration', isOpen: false },
    { id: 'contacts', isOpen: false },
    { id: 'address', isOpen: false },
    { id: 'tournamentSystem', isOpen: false },
    { id: 'other', isOpen: false },
  ];

  get areAllPanelsOpen(): boolean {
    return this.panels.every(panel => panel.isOpen);
  }

  protected toggleAllPanels(): void {
    const shouldOpenAll = !this.areAllPanelsOpen;
    this.panels.forEach((panel) => {
      panel.isOpen = shouldOpenAll;
      console.log(panel.id, panel.isOpen);
    });
  }

  protected togglePanel(panelId: string, isOpen: boolean): void {
    const panel = this.panels.find(panel => panel.id === panelId);
    if (panel && panel.isOpen !== isOpen) {
      panel.isOpen = isOpen;
    }
  }
}
