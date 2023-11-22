import { Component, Input, OnInit } from '@angular/core';
import { AnswerPegColor, PegColors } from 'src/app/enums';

@Component({
  selector: 'app-game-round-row',
  templateUrl: './game-round-row.component.html',
  styleUrls: ['./game-round-row.component.scss'],
})
export class GameRoundRowComponent implements OnInit {
  @Input() roundNumber!: number;
  @Input() guessData!: PegColors[];
  @Input() answerData!: AnswerPegColor[];

  constructor() {}

  ngOnInit() {}
}
