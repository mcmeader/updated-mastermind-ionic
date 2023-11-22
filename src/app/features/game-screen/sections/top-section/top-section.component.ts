import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
})
export class TopSectionComponent {
  constructor(private router: Router, public gameService: GameService) {}

  public goBack() {
    this.router.navigate(['title-screen']);
  }
}
