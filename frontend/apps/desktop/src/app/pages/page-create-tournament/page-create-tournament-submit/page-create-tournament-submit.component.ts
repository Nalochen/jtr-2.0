import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonTypeEnum, ButtonColorEnum, ButtonFunctionType } from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'page-create-tournament-submit',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TranslatePipe
  ],
  templateUrl: './page-create-tournament-submit.component.html',
  styleUrl: './page-create-tournament-submit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCreateTournamentSubmitComponent {
  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonFunctionType = ButtonFunctionType;

  public onManageTeams() {
    console.log('Manage Teams');
  }

  public onPublish() {
    console.log('Publish');
  }
}
