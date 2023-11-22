import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { CHALLENGE, StandardColors } from 'src/app/constants';
import { StandardAnswerColors } from 'src/app/constants/answer-colors.constants';
import { Difficulties, AnswerPegColor, PegColors } from 'src/app/enums';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _gameDifficulty = new BehaviorSubject(Difficulties.normal);
  public get gameDifficulty$(): Observable<Difficulties> {
    return this._gameDifficulty.asObservable();
  }
  public set gameDifficulty(diff: Difficulties) {
    this._gameDifficulty.next(diff);
  }

  private _solution: PegColors[] = [];
  public get solution() {
    return this._solution;
  }

  public gameColors = StandardColors;
  public answerColors = StandardAnswerColors;

  public getDifficulties() {
    return [
      Difficulties.easy,
      Difficulties.normal,
      Difficulties.hard,
      Difficulties.nightmare,
      Difficulties.impossible,
    ];
  }

  public checkGuess(guess: PegColors[]) {
    const checkedPegs = new Array(guess.length).fill(AnswerPegColor.empty);
    const checkedGuess = [...guess];

    guess.forEach((data, index) => {
      console.log('s', data, index, this.solution);
      if (data === this.solution[index]) {
        checkedGuess[index] = PegColors.checked;
        checkedPegs[index] = AnswerPegColor.black;
      }
    });

    const whiteGuess = [...this._solution];
    checkedPegs.forEach((data, index) => {
      if (data === AnswerPegColor.black) {
        whiteGuess[index] = PegColors.empty;
      }
    });

    checkedGuess.forEach((data, index) => {
      if (data !== PegColors.checked) {
        const indexWhiteGuess = whiteGuess.indexOf(data);
        if (indexWhiteGuess !== -1) {
          checkedPegs[index] = AnswerPegColor.white;
          whiteGuess[indexWhiteGuess] = PegColors.empty;
        }
      }
    });

    if (
      checkedPegs.some((value) => value === AnswerPegColor.empty) ||
      checkedPegs.some((value) => value === AnswerPegColor.white)
    ) {
      checkedPegs.sort();
      return checkedPegs;
    } else {
      return new Array(guess.length).fill(AnswerPegColor.black);
    }
  }

  public generateSolution() {
    this.gameDifficulty$
      .pipe(
        take(1),
        map((difficulty: Difficulties) => {
          console.log('d', difficulty);
          const challenge = CHALLENGE[difficulty];
          const difficultyColors = challenge.colors;
          const solutionPegs: PegColors[] = new Array(
            challenge.numberOfPegs
          ).fill(PegColors.empty);
          //TODO: Replace with random.org mapping
          return solutionPegs.map(
            () =>
              difficultyColors[
                Math.floor(Math.random() * challenge.numberOfPegs)
              ]
          );
        })
      )
      .subscribe((result: PegColors[]) => {
        this._solution = result;
      });
  }
}
