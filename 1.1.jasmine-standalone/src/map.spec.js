const map = require('./map');

describe('mapPolyfill', () => {
  it('should double the array', () => {
    expect(map([1, 2, 3], (x) => 2 * x)).toEqual([2, 4, 6]);
  });

  it('should triple the array', () => {
    expect(map([1, 2, 3], (x) => 3 * x)).toEqual([3, 6, 9]);
  });

  it('should work with empty array ', () => {
    expect(map([], (x) => 3 * x)).toEqual([]);
  });
});
