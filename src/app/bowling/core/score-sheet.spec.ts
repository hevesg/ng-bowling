import { ScoreSheet } from './score-sheet';

describe('ScoreSheet', () => {
  let scoreSheet: ScoreSheet;

  beforeEach(() => {
    scoreSheet = new ScoreSheet();
  });

  it('should create an instance', () => {
    expect(scoreSheet).toBeTruthy();
    expect(scoreSheet.activeIndex).toEqual(0);
  });

  it('should change activeIndex', () => {
    expect(scoreSheet).toBeTruthy();
    scoreSheet.registerHit(10);
    expect(scoreSheet.activeIndex).toEqual(1);
  });
});
