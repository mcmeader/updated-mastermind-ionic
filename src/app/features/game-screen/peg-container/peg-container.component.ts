import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameColors } from 'src/app/constants';
import { AnswerColors } from 'src/app/constants/answer-colors.constants';
import { PegColors } from 'src/app/enums';
import { GameService } from 'src/app/services/game/game.service';
@Component({
  selector: 'app-peg-container',
  templateUrl: './peg-container.component.html',
  styleUrls: ['./peg-container.component.scss'],
})
export class PegContainerComponent implements OnInit {
  @Input() pegs!: any;
  @Input() disabled!: boolean;
  @Input() answerContainer!: boolean;
  @Output() pegColor = new EventEmitter<any>();

  pegColors!: AnswerColors[] | GameColors[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.pegs = this.answerContainer
      ? this.gameService.answerColors
      : this.gameService.gameColors;
  }

  public clicked(event: number) {
    this.pegColor.emit(this.pegs[event]);
  }
}
