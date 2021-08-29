import {Frame} from "./frame";
import {FrameType} from "./frame-type";

export class LastFrame extends Frame {

  public constructor(previous?: Frame) {
    super(previous, 3);
  }

  public finalizeScore(next: Frame): void {
  }

  public registerHit(pins: number): boolean {
    this.validateHit(pins);

    this._attempts.push(pins);
    this._standingPins -= pins;

    if (this._attempts.length < this._maxAttempts && !this.hasStandingPins()) {
      this._standingPins = 10;
      return false;
    } else if (this._attempts.length < 2) {
      return false;
    } else {
      this._previousFrame?.finalizeScore(this);
      this._score = this.localScore;
      this._type = FrameType.LAST;
      return true;
    }
  }
}
