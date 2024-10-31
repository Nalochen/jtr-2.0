import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusIndicatorComponent implements OnChanges {
  @Input() totalTeams: number = 0;
  @Input() registeredTeams: number = 0;

  fillPercentage: number = 0;
  showBackground: boolean = true;

  public ngOnChanges(): void {
    this.calculateFill();
  }

  private calculateFill(): void {
    if (this.totalTeams === 0) {
      this.fillPercentage = 100;
      this.showBackground = false;
    } else {
      const ratio = Math.min(this.registeredTeams / this.totalTeams, 1);
      this.fillPercentage = ratio * 100;
      this.showBackground = this.fillPercentage < 100;
    }
  }
}
