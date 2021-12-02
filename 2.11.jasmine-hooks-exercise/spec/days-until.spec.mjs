import { daysUntil } from '/__src__/days-until.mjs';

describe('daysUntil', () => {
  /** @type {jasmine.Clock} */
  let clock;

  beforeEach(() => {
    clock = jasmine.clock();
  });

  afterEach(() => {
    clock.uninstall();
  });

  it('should return 5 for a date 5 days in the future', () => {
    // arrange
    clock.mockDate(new Date(2021, 8, 10));

    // act
    const until = daysUntil(new Date(2021, 8, 15));

    // assert
    expect(until).toBe(5);
  });

  it('should return 5 for a date 5 and 1/4 days in the future', () => {
    // arrange
    clock.mockDate(new Date(2021, 8, 10));

    // act
    const until = daysUntil(new Date(2021, 8, 15, 8, 0, 0));

    // assert
    expect(until).toBe(5);
  });

  it('should return 5 for a date 4 and 3/4 days in the future', () => {
    // arrange
    clock.mockDate(new Date(2021, 8, 10));

    // act
    const until = daysUntil(new Date(2021, 8, 14, 18, 0, 0));

    // assert
    expect(until).toBe(5);
  });
});
