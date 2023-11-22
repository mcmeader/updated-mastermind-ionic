import { Component } from '@angular/core';
import { Difficulties } from 'src/app/enums';
import { GameService } from 'src/app/services/game/game.service';
import { CONSTANTS } from './difficulty-section.constants';

@Component({
  selector: 'app-difficulty-section',
  templateUrl: './difficulty-section.component.html',
  styleUrls: ['./difficulty-section.component.scss'],
})
export class DifficultySectionComponent {
  public readonly CONSTS = CONSTANTS;

  constructor(public gameService: GameService) {}

  clickDifficulty(diff: any) {
    this.gameService.gameDifficulty = diff.detail.value;
  }
}
