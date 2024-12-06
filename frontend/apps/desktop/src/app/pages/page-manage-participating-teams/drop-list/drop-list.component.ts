import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, Signal } from '@angular/core';
import { TournamentTeamData } from '@jtr/data-domain/store';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent, ButtonTypeEnum, ButtonColorEnum, ChipComponent } from '../../../ui-shared';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'drop-list',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    ButtonComponent,
    DividerModule,
    TooltipModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    DialogModule,
    DropdownModule,
    FormsModule,
    ChipComponent,
  ],
  templateUrl: './drop-list.component.html',
  styleUrl: './drop-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropListComponent {
  public readonly participatingTeams = input.required<TournamentTeamData[]>();
  public readonly waitingTeams = input.required<TournamentTeamData[]>();
  public deleteTeam = output<{index: number, isParticipating: boolean}>();

  public readonly ButtonColorEnum = ButtonColorEnum;
  public readonly ButtonTypeEnum = ButtonTypeEnum;

  public drop(event: CdkDragDrop<TournamentTeamData[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  public sendEmail(team: TournamentTeamData): void {
    window.alert('sendMail')
  }

  public hasPaid(team: TournamentTeamData): void {
    team.hasPaid = !team.hasPaid;
  }

  public onDeleteTeam(index: number, isParticipating: boolean): void {
    this.deleteTeam.emit({index, isParticipating});
  }
}
