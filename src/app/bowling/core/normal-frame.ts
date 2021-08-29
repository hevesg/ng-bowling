import {Frame} from "./frame";
import {FrameType} from "./frame-type";

export class NormalFrame extends Frame {

  constructor(previous?: Frame) {
    super(previous, 2);
  }

  private closeFrame(): void {
    if (!this.hasStandingPins() && this._attempts.length == 1) {
      this._type = FrameType.STRIKE;
    } else if (!this.hasStandingPins() && this._attempts.length == this._maxAttempts) {
      this._type = FrameType.SPARE;
    } else if (this.hasStandingPins() && this._attempts.length == this._maxAttempts) {
      this._type = FrameType.OPEN;
    }

    this._previousFrame?.finalizeScore(this);
    if (this.isOpen()) {
      this._score = this.localScore;
    }
  }

  public finalizeScore(next: Frame): void {
    if (this.isStrike() || this.isSpare()) {
      if (this.isStrike()) {
        if (next.attempts.length < 3) {
          this._score = this.localScore + next.localScore;
        } else {
          this._score = this.localScore + next.attempts[0] + next.attempts[1];
        }
      } else if (this.isSpare()) {
        this._score = this.localScore + next.attempts[0];
      }
    }
  }

  public registerHit(pins: number): boolean {
    this.validateHit(pins);

    this._attempts.push(pins);
    this._standingPins -= pins;

    if ((this._standingPins == 0) || (this._attempts.length === this._maxAttempts)) {
      this.closeFrame();

      return true;
    } else {
      return false;
    }
  }
}
