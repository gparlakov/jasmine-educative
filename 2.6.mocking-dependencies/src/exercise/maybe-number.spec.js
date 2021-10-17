const { maybeNumber } = require('./maybe-number');

describe('maybe-number', () => {

  it('should call the callback if string passed in', () => {
    const spy = jasmine.createSpy('callback');
    maybeNumber(1, spy);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should not call the callback if no null, number or object passed in', () => {
    const spy = jasmine.createSpy('callback');
    maybeNumber(null, spy);
    maybeNumber(undefined, spy);
    maybeNumber('1', spy);
    maybeNumber({}, spy);

    expect(spy).not.toHaveBeenCalled();
  });
});
