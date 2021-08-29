import {Component, Input, OnInit} from '@angular/core';
import {ScoreSheet} from "../../core/score-sheet";

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.css']
})
export class ScoreSheetComponent implements OnInit {

  @Input() public scoreSheet!: ScoreSheet;

  constructor() {
  }

  ngOnInit(): void {
  }

}
