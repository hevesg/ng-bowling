import {Frame} from './frame';
import {FrameType} from "./frame-type";

class TopFrame extends Frame {
  constructor() {
    super(undefined, 2);
  }
  finalizeScore(next: Frame): void {
  }

  registerHit(pins: number): boolean {
    this.validateHit(pins);
    return false;
  }

}
describe('Frame', () => {
  let frame: TopFrame;

  beforeEach(() => {
    frame = new TopFrame();
  });

  it('should create an instance', () => {
    expect(frame).toBeTruthy();
    expect(frame.score).toEqual(0);
    expect(frame.totalScore).toEqual(0);
    expect(frame.localScore).toEqual(0);
    expect(frame.type).toEqual(FrameType.NONE);
    expect(frame.attempts.length).toEqual(0);
    expect(frame.standingPins).toEqual(10);
  });

  it('throw exception if more pins are hit', () => {
    expect(() => frame.registerHit(12)).toThrow(new Error("Too many pins are hit"));
  });
});
