import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-data-container-expandable',
  standalone: true,
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0px',
          padding: '0',
          overflow: 'hidden',
          opacity: 0,
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: 1,
          overflow: 'hidden',
          padding: '0',
        })
      ),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
  imports: [CommonModule],
  templateUrl: './data-container-expandable.component.html',
  styleUrl: './data-container-expandable.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataContainerExpandableComponent implements OnChanges {
  @Input() public id = '';
  @Input() public isOpen = false;
  @Output() public toggleVisibility: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {}

  protected togglePanel() {
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
    this.toggleVisibility.emit(this.isOpen);
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && !changes['isOpen'].firstChange) {
      this.isOpen = changes['isOpen'].currentValue;
    }
  }
}
