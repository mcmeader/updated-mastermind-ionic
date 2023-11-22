import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss'],
})
export class GameSectionComponent {
  // public selectColor(color) {
  //   if (this.currentIndex < this.difficulty.numberOfPegs) {
  //     const newPegs = [...this.selectedPegs];
  //     newPegs[this.currentIndex] = color;
  //     this.selectedPegs = newPegs;
  //     const oldRoundData = [...this.roundData];
  //     oldRoundData.pop();
  //     const newRoundData = this.roundData[this.currentRound];
  //     newRoundData.guesses = newPegs;
  //     this.roundData = [...oldRoundData, newRoundData];
  //     this.currentIndex = this.currentIndex + 1;
  //   }
  // }
}
