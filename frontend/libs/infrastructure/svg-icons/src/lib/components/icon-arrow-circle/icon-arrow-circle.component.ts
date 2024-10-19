import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'svg-icon-arrow-circle',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowCircleComponent extends AbstractIconComponent {
  @Input() public opacity: number = 1;

  protected override rawIcon: string = `<svg viewBox="0 0  150 150" preserveAspectRatio="xMinYMin meet">
    <circle cx="75" cy="75" r="75" fill="#color-placeholder" opacity="{opacity-placeholder}"/>
    <path d="M44.039 97.042l31.059-30.99 31.058 30.99 9.542-9.54-40.6-40.594-40.6 40.594z" fill="white"/>
</svg>`;

  protected override replaceVariables(iconString: string): string {
    iconString = super.replaceVariables(iconString);
    iconString = iconString.replace(
      /{opacity-placeholder}/,
      this.opacity.toString(10)
    );
    return iconString;
  }
}
