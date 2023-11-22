import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OptionButtonComponent } from './option-button/option-button.component';
import { DifficultySectionComponent } from './sections/difficulty-section/difficulty-section.component';
import { HighScoreSectionComponent } from './sections/high-score-section/high-score-section.component';
import { SettingsSectionComponent } from './sections/settings-section/settings-section.component';
import { TitleScreenComponent } from './title-screen.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [
    DifficultySectionComponent,
    HighScoreSectionComponent,
    SettingsSectionComponent,
    OptionButtonComponent,
    TitleScreenComponent,
  ],
})
export class TitleScreenModule {}
