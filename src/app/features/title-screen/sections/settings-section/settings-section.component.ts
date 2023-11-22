import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from './settings-section.constants';

@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.scss'],
})
export class SettingsSectionComponent implements OnInit {
  public readonly CONSTS = CONSTANTS;

  constructor() {}

  ngOnInit() {}
}
