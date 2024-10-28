import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusIndicatorComponent implements OnInit, OnChanges {
  @Input() totalTeams: number = 0;
  @Input() registeredTeams: number = 0;

  fillPercentage: number = 0;
  showBackground: boolean = true;

  ngOnInit(): void {
    this.calculateFill();
  }

  ngOnChanges(): void {
    this.calculateFill();
  }

  calculateFill(): void {
    if (this.totalTeams === 0) {
      this.fillPercentage = 100;
      this.showBackground = false;
      return;
    }

    const ratio = this.registeredTeams / this.totalTeams;

    if (this.registeredTeams < this.totalTeams) {
      this.fillPercentage = ratio * 100;
      this.showBackground = true;
    } else if (this.registeredTeams === this.totalTeams) {
      this.fillPercentage = 100;
      this.showBackground = false;
    } else {
      this.fillPercentage = ratio * 100;
      this.showBackground = false;
    }
  }
}
