import {Component, Input, OnInit} from '@angular/core';
import {Frame} from "../../core/frame";

@Component({
  selector: 'app-score-frame',
  templateUrl: './score-frame.component.html',
  styleUrls: ['./score-frame.component.css']
})
export class ScoreFrameComponent implements OnInit {

  @Input() public frame!: Frame;

  constructor() { }

  ngOnInit(): void {
  }

}
