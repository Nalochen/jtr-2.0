import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe, NgxEditorModule],
  selector: 'app-text-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements OnDestroy {
  public readonly form = input.required<
    FormGroup<{
      subject: FormControl<string | null>;
      text: FormControl<string | null>;
    }>
  >({});
  protected readonly editor: Editor = new Editor();

  public ngOnDestroy(): void {
    this.editor.destroy();
  }
}
