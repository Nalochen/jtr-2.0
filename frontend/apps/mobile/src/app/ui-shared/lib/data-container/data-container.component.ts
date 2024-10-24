import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges, Output,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-data-container',
  standalone: true,
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0px',
        padding: '0',
        overflow: 'hidden',
        opacity: 0,
      })),
      state('expanded', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden',
        padding: '0',
      })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ])
  ],
  imports: [CommonModule],
  templateUrl: './data-container.component.html',
  styleUrl: './data-container.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataContainerComponent implements OnChanges {
  @Input() public id: string = '';
  @Input() public isOpen: boolean = false;
  @Output() public toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {}

  protected togglePanel() {
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
    this.toggle.emit(this.isOpen);
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && !changes['isOpen'].firstChange) {
      this.isOpen = changes['isOpen'].currentValue;
    }
  }
}
