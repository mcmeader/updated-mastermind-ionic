import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game/game.service';
import { CONSTANTS } from './title-screen.constants';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.scss'],
})
export class TitleScreenComponent {
  public readonly CONSTS = CONSTANTS;

  constructor(private route: Router, private gameService: GameService) {}

  public startGame() {
    this.gameService.generateSolution();
    this.route.navigate(['game-screen']);
  }
}
