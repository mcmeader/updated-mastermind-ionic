import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishScreenComponent } from '../finish-screen/finish-screen.component';
import { GameScreenComponent } from '../game-screen/game-screen.component';
import { TitleScreenComponent } from '../title-screen/title-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'title-screen',
    pathMatch: 'full',
  },
  {
    path: 'title-screen',
    component: TitleScreenComponent,
  },
  {
    path: 'game-screen',
    component: GameScreenComponent,
  },
  {
    path: 'finish-screen',
    component: FinishScreenComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
