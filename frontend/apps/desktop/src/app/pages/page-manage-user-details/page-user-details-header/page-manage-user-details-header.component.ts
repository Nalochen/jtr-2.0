import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EditUserForm } from '@jtr/business-domain/user';

import { UserService } from '../../../business-rules/user/user.service';

import {
  ButtonColorEnum,
  ButtonComponent,
  ButtonTypeEnum,
  InfoButtonComponent,
} from '../../../ui-shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'page-manage-user-details-header',
  imports: [CommonModule, ButtonComponent, InfoButtonComponent, TranslatePipe],
  templateUrl: './page-manage-user-details-header.component.html',
  styleUrl: './page-manage-user-details-header.component.less',
})
export class PageManageUserDetailsHeaderComponent {
  constructor(private readonly userService: UserService) {}

  @Input() public form!: FormGroup<EditUserForm>;
  @Input() public isLoggedIn$!: boolean;
  @Input() public userId?: number;

  public readonly ButtonTypeEnum = ButtonTypeEnum;
  public readonly ButtonColorEnum = ButtonColorEnum;

  public async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const selectedFile = input.files[0];

      await this.userService.updatePicture(selectedFile);
    }
  }

  public getPictureUrl(): string {
    return this.userId ? this.userService.getPictureUrl(this.userId) : '';
  }
}
