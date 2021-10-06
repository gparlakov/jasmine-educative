const { daysAgo } = require('./days-ago.js');

describe('daysAgo', () => {
  it('should return 7 for a date 7 days ago', () => {
    // arrange
    const clock = jasmine.clock();
    clock.install().mockDate(new Date(2021, 8, 10));

    // act
    const ago = daysAgo(new Date(2021, 8, 3));

    // assert
    expect(ago).toBe(7);

    clock.uninstall();
  });

  it('should return 7 for a date 6 and 3/4 days ago', () => {
    // arrange
    const clock = jasmine.clock();
    clock.install().mockDate(new Date(2021, 8, 10));

    // act
    const ago = daysAgo(new Date(2021, 8, 3, 6, 0, 0));

    // assert
    expect(ago).toBe(7);

    clock.uninstall();
  });

  it('should return 7 for a date 7 and 1/4 days ago', () => {
    // arrange
    const clock = jasmine.clock();
    clock.install().mockDate(new Date(2021, 8, 10));

    // act
    const ago = daysAgo(new Date(2021, 8, 2, 18, 0, 0));

    // assert
    expect(ago).toBe(7);

    clock.uninstall();
  });

  it('should return 70 for a date 70 days ago', () => {
    // arrange
    const clock = jasmine.clock();
    clock.install().mockDate(new Date(2021, 8, 25));

    // act
    const ago = daysAgo(new Date(2021, 6, 15));

    // assert
    expect(ago).toBe(70);

    clock.uninstall();
  });
});
