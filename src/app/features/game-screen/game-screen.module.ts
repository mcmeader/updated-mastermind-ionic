import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BottomSectionComponent } from './sections/bottom-section/bottom-section.component';
import { GameSectionComponent } from './sections/game-section/game-section.component';
import { TopSectionComponent } from './sections/top-section/top-section.component';
import { ColorPegComponent } from './color-peg/color-peg.component';
import { GameRoundRowComponent } from './sections/game-section/game-round-row/game-round-row.component';
import { PegContainerComponent } from './peg-container/peg-container.component';
import { GameScreenComponent } from './game-screen.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [
    BottomSectionComponent,
    GameSectionComponent,
    TopSectionComponent,
    GameSectionComponent,
    ColorPegComponent,
    GameRoundRowComponent,
    PegContainerComponent,
    GameScreenComponent,
  ],
})
export class GameScreenModule {}
