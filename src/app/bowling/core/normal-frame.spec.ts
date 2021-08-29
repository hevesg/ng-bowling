import {NormalFrame} from './normal-frame';
import {Frame} from "./frame";

describe('NormalFrame', () => {
  let frame1: Frame;
  let frame2: Frame;

  beforeEach(() => {
    frame1 = new NormalFrame();
    frame2 = new NormalFrame(frame1);
  });

  it('should create an instance', () => {
    expect(frame1).toBeTruthy();
    expect(frame2).toBeTruthy();
    expect(frame1.hasPreviousFrame()).toBeFalsy();
    expect(frame2.hasPreviousFrame()).toBeTruthy();
  });

  it("registers hits in open frame", () => {
    expect(frame1.registerHit(2)).toBeFalse();
    expect(frame1.registerHit(6)).toBeTruthy();
    expect(frame1.standingPins).toEqual(2);
    expect(frame1.isOpen()).toBeTruthy();
  });

  it("registers hits in spare frame", () => {
    expect(frame1.registerHit(2)).toBeFalse();
    expect(frame1.registerHit(8)).toBeTruthy();
    expect(frame1.standingPins).toEqual(0);
    expect(frame1.isSpare()).toBeTruthy();
  });

  it("registers hits in strike frame", () => {
    expect(frame1.registerHit(10)).toBeTruthy();
    expect(frame1.standingPins).toEqual(0);
    expect(frame1.isStrike()).toBeTruthy();
  });

  it("throws error on closed frame", () => {
    expect(frame1.registerHit(2)).toBeFalsy();
    expect(frame1.registerHit(2)).toBeTruthy();
    expect(() => frame1.registerHit(2)).toThrow(new Error("Frame is closed"));
  });

  it("calculates the right score with open frame", () => {
    expect(frame1.registerHit(2)).toBeFalsy();
    expect(frame1.registerHit(2)).toBeTruthy();
    expect(frame2.registerHit(2)).toBeFalsy();
    expect(frame2.registerHit(2)).toBeTruthy();
    expect(frame1.totalScore).toEqual(4);
  });

  it("calculates the right score with spare frame", () => {
    expect(frame1.registerHit(2)).toBeFalsy();
    expect(frame1.registerHit(8)).toBeTruthy();
    expect(frame2.registerHit(2)).toBeFalsy();
    expect(frame2.registerHit(2)).toBeTruthy();
    expect(frame1.totalScore).toEqual(12);
  });

  it("calculates the right score with strike frame", () => {
    expect(frame1.registerHit(10)).toBeTruthy();
    expect(frame2.registerHit(2)).toBeFalsy();
    expect(frame2.registerHit(2)).toBeTruthy();
    expect(frame1.totalScore).toEqual(14);
  });
});
