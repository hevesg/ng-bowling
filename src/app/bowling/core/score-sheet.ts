import {Frame} from "./frame";
import {NormalFrame} from "./normal-frame";
import {LastFrame} from "./last-frame";

export class ScoreSheet {

  private readonly _frames: Frame[];
  private _activeIndex = 0;

  constructor() {
    this._frames = [];
    this.build();
  }

  private build(): void {
    this._frames.push(new NormalFrame());
    for (let i: number = 0; i < 8; i++) {
      this._frames.push(new NormalFrame(this._frames[i]));
    }
    this._frames.push(new LastFrame(this._frames[8]));
  }

  public registerHit(pins: number): void {
    if (this._activeIndex >= 10) {
      throw new Error("No more frames");
    }
    const jumpFrame: boolean = this.activeFrame.registerHit(pins);
    if (jumpFrame) {
      this._activeIndex++;
    }
  }

  public get activeIndex() {
    return this._activeIndex;
  }

  public get activeFrame(): Frame {
    return this._frames[this._activeIndex];
  }

  public getTotalScore(): number {
    return this._frames.reduce((acc, curr) => acc + curr.score, 0);
  }

}
