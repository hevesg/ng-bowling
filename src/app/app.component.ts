import { Component } from '@angular/core';
import {Player} from "./bowling/core/player";
import {ScoreSheet} from "./bowling/core/score-sheet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng-bowling';
  public player: Player = new Player();

  public get scoreSheet(): ScoreSheet {
    return this.player.scoreSheet;
  }

  public onAttempt(pins: number): void {
    this.player.hit(pins);
  }
}
