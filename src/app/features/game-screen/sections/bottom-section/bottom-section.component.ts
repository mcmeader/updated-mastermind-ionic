import { Component, EventEmitter, Output } from '@angular/core';
import { CHALLENGE } from 'src/app/constants/difficulties.constants';
import { PegColors } from 'src/app/enums';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss'],
})
export class BottomSectionComponent {
  readonly CHALLENGE = CHALLENGE;

  choices!: PegColors[];

  @Output() emitSolution = new EventEmitter<PegColors[]>();

  constructor(public gameService: GameService) {}

  submitGuess() {
    this.emitSolution.emit();
  }

  selectColor($event: any) {
    this.choices.push($event);
    console.log('d', this.choices);
  }
}
