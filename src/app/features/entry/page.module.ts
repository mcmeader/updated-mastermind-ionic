import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FinishScreenComponent } from '../finish-screen/finish-screen.component';
import { GameScreenModule } from '../game-screen/game-screen.module';
import { TitleScreenModule } from '../title-screen/title-screen.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PagesRoutingModule,
    TitleScreenModule,
    GameScreenModule,
  ],
  declarations: [FinishScreenComponent],
})
export class PagesModule {}
