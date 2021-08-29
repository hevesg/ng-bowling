import {FrameType} from "./frame-type";

export abstract class Frame {
  protected _standingPins: number = 10;
  protected readonly _attempts: number[] = [];
  protected _type: FrameType = FrameType.NONE;
  protected readonly _previousFrame: Frame | undefined;
  protected _score: number = 0;
  protected _maxAttempts: number;

  protected constructor(previous: Frame | undefined, maxAttempts: number) {
    this._previousFrame = previous;
    this._maxAttempts = maxAttempts;
  }

  public abstract finalizeScore(next: Frame): void;

  public abstract registerHit(pins: number): boolean;

  protected validateHit(pins: number): void {
    if (pins > this._standingPins) {
      throw new Error("Too many pins are hit");
    } else if (this._type != FrameType.NONE) {
      throw new Error("Frame is closed");
    }
  }

  public hasPreviousFrame(): boolean {
    return !!this._previousFrame;
  }

  public get standingPins(): number {
    return this._standingPins;
  }

  public get attempts(): number[] {
    return this._attempts;
  }

  public get type(): FrameType {
    return this._type;
  }

  public get localScore(): number {
    return this.attempts.reduce((acc, curr) => acc + curr, 0);
  }

  public get score(): number {
    return this._score;
  }

  public isStrike(): boolean {
    return this._type == FrameType.STRIKE;
  }

  public isSpare(): boolean {
    return this._type == FrameType.SPARE;
  }

  public isOpen(): boolean {
    return this._type == FrameType.OPEN;
  }

  public hasStandingPins(): boolean {
    return this._standingPins > 0;
  }

  public get totalScore(): number {
    if (this.hasPreviousFrame()) {
      return (this._previousFrame?.totalScore ?? 0) + this._score;
    } else {
      return this._score;
    }
  }
}
