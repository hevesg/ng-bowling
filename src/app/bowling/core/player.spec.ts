import { Player } from './player';

describe('Player', () => {
  let ringo: Player;

  beforeEach(() => {
    ringo = new Player();
  });

  it('should create an instance', () => {
    expect(ringo).toBeTruthy();
    expect(ringo.scoreSheet).toBeTruthy();
  });

  it("should calculate the right amount of score", () => {
    ringo.hit(1);
    ringo.hit(4);
    ringo.hit(4);
    ringo.hit(5);
    ringo.hit(6);
    ringo.hit(4);
    ringo.hit(5);
    ringo.hit(5);
    ringo.hit(10);
    ringo.hit(0);
    ringo.hit(1);
    ringo.hit(7);
    ringo.hit(3);
    ringo.hit(6);
    ringo.hit(4);
    ringo.hit(10);
    ringo.hit(2);
    ringo.hit(8);
    ringo.hit(6);
    expect(ringo.totalScore).toEqual(133);
  });
});
