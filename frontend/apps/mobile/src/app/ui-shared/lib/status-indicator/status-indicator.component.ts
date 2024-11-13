import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';


@Component({
  selector: 'app-status-indicator',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './status-indicator.component.html',
  styleUrl: './status-indicator.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusIndicatorComponent implements OnChanges {
  @Input() public totalTeams: number = 0;
  @Input() public registeredTeams: number = 0;

  public fillPercentage: number = 0;
  public showBackground: boolean = true;

  public ngOnChanges(): void {
    this.calculateFill();
  }

  private calculateFill(): void {
    if (this.totalTeams === 0) {
      this.fillPercentage = 100;
      this.showBackground = false;
    } else {
      const ratio = this.registeredTeams / this.totalTeams;
      this.fillPercentage = ratio * 100;
      this.showBackground = this.fillPercentage < 100;
    }
  }
}
