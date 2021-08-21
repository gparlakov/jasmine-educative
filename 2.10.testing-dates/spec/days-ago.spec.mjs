
import { daysAgo } from '/__src__/days-ago.mjs';

describe('daysAgo', () => {
  it('should return 7 for a date 7 days ago', () => {
    // arrange
    const clock = jasmine.clock()
    clock.install().mockDate(new Date(2021, 8, 10));

    // act
    const ago = daysAgo(new Date(2021, 8, 3));

    // assert
    expect(ago).toBe(7);

    clock.uninstall();
  });
});
