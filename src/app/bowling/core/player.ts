import {ScoreSheet} from "./score-sheet";

export class Player {
  private readonly _scoreSheet: ScoreSheet;

  constructor() {
    this._scoreSheet = new ScoreSheet();
  }

  public hit(pins: number): void {
    this.scoreSheet.registerHit(pins);
  }

  public get scoreSheet(): ScoreSheet {
    return this._scoreSheet;
  }

  public get totalScore(): number {
    return this._scoreSheet.getTotalScore();
  }
}
