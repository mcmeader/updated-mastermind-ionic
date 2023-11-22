import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from './high-score-section.constants';

@Component({
  selector: 'app-high-score-section',
  templateUrl: './high-score-section.component.html',
  styleUrls: ['./high-score-section.component.scss'],
})
export class HighScoreSectionComponent implements OnInit {
  public readonly CONSTS = CONSTANTS;

  constructor() {}

  ngOnInit() {}
}
