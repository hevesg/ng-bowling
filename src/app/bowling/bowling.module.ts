import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreSheetComponent } from './components/score-sheet/score-sheet.component';
import {ScoreFrameComponent} from "./components/score-frame/score-frame.component";

@NgModule({
  declarations: [
    ScoreSheetComponent,
    ScoreFrameComponent
  ],
  exports: [
    ScoreSheetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BowlingModule { }
