// @ts-nocheck
const { maybeString } = require('./maybe-string');

describe('maybe-string', () => {

  it('should call the callback if string passed in', () => {
    const spy = jasmine.createSpy('callback');
    maybeString('s', spy);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('s');
  });

  it('should not call the callback if no null, number or object passed in', () => {
    const spy = jasmine.createSpy('callback');
    maybeString(null, spy);
    maybeString(undefined, spy);
    maybeString(1, spy);
    maybeString({}, spy);

    expect(spy).not.toHaveBeenCalled();
  });

  // it('should return the result of callback when string', () => {
  //   const actual = maybeString('my string', s => s.length);

  //   expect(actual).toBe(9);
  // });
});
