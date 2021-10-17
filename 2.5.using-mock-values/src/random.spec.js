const { randomString, randomNumber } = require('./random');

describe('firstNChars', () => {
  it('should return a random string - 5 attempts', () => {
    expect(randomString()).toEqual(jasmine.any(String));
    expect(randomString()).toEqual(jasmine.any(String));
    expect(randomString()).toEqual(jasmine.any(String));
    expect(randomString()).toEqual(jasmine.any(String));
    expect(randomString()).toEqual(jasmine.any(String));
  });

  it('should return a random number - 5 attempts', () => {
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
  });
});
