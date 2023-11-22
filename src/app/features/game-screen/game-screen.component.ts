import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CHALLENGE, ChallengeInfo } from 'src/app/constants';
import { Difficulties, AnswerPegColor, PegColors } from 'src/app/enums';
import { GameService } from 'src/app/services/game/game.service';

type RoundData = {
  round: number;
  answers: AnswerPegColor[];
  guesses: PegColors[];
};

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  private difficulty!: ChallengeInfo;
  private solutionHidden = false;
  private currentIndex = 0;
  private currentRound = 0;
  private selectedIndex!: number | null;
  private selectedPegs!: PegColors[];
  private showWinMessage!: boolean;
  private showLoseMessage!: boolean;

  public solution!: PegColors[];
  public choices!: PegColors[];
  public roundData!: RoundData[];

  // "Congratulations!",
  //             `You solved the puzzle in ${currentRound + 1} rounds!`,
  //             [
  //                 {
  //                     text: "Ok",
  //                     onPress: () => console.log("Cancel Pressed"),
  //                     style: "cancel"
  //                 }
  //             ],

  //             "Better Luck Next Time!",
  //             `You failed to solve the puzzle in the alloted ${currentRound + 1} rounds!`,
  //             [
  //                 {
  //                     text: "Ok",
  //                     onPress: () => console.log("Cancel Pressed"),
  //                     style: "cancel"
  //                 }
  //             ],

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {
    this.gameService.gameDifficulty$
      .pipe(takeUntil(this.destroy$))
      .subscribe((difficulty: Difficulties) => {
        this.difficulty = CHALLENGE[difficulty];

        this.selectedPegs = new Array(this.difficulty.numberOfPegs).fill(
          PegColors.empty
        );

        this.roundData = [
          {
            round: 1,
            answers: new Array(this.difficulty.numberOfPegs).fill(
              AnswerPegColor.empty
            ),
            guesses: new Array(this.difficulty.numberOfPegs).fill(
              PegColors.empty
            ),
          },
        ];

        this.choices = this.difficulty.colors;
      });

    this.solution = this.gameService.solution;
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public resetGuess() {
    this.selectedPegs = new Array(this.difficulty.numberOfPegs).fill(
      AnswerPegColor.empty
    );
    this.currentIndex = 0;
    this.selectedIndex = null;
    const oldRoundData = [...this.roundData];
    oldRoundData.pop();
    const newRoundData = this.roundData[this.currentRound];
    newRoundData.guesses = new Array(this.difficulty.numberOfPegs).fill(
      AnswerPegColor.empty
    );
    this.roundData = [...oldRoundData, newRoundData];
  }

  public submitGuess() {
    if (!this.selectedPegs.includes(PegColors.empty)) {
      const checkedGuess = this.gameService.checkGuess(this.selectedPegs);
      if (
        checkedGuess.indexOf(AnswerPegColor.white) === -1 &&
        checkedGuess.indexOf(AnswerPegColor.empty) === -1
      ) {
        this.solutionHidden = false;
        const currentRoundData = this.roundData[this.currentRound];
        currentRoundData.answers = checkedGuess;
        //Create Win Alert
      } else {
        if (this.difficulty.maxGuesses === this.currentRound + 1) {
          this.solutionHidden = false;
          const currentRoundData = this.roundData[this.currentRound];
          currentRoundData.answers = checkedGuess;
          //Create Lose Alert
        } else {
          console.log('d');
          const currentRoundData = this.roundData[this.currentRound];
          currentRoundData.answers = checkedGuess;
          this.roundData = [
            ...this.roundData,
            {
              round: this.currentRound + 1,
              answers: new Array(this.difficulty.numberOfPegs).fill(
                PegColors.empty
              ),
              guesses: new Array(this.difficulty.numberOfPegs).fill(
                AnswerPegColor.empty
              ),
            },
          ];
          this.currentRound = this.currentRound + 1;
          this.selectedPegs = new Array(this.difficulty.numberOfPegs).fill(
            AnswerPegColor.empty
          );
          this.currentIndex = 0;
          this.selectedIndex = null;
        }
      }
    }
  }
}
