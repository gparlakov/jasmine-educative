const { configRetries: config } = require('./config-retries');

describe('config-retries', () => {
  it('should call the retries callback if one passed', () => {
    const c = {
      retries: () => {},
    };
    const retries = spyOn(c, 'retries');
    config(c);

    expect(retries).toHaveBeenCalled();
    expect(retries).toHaveBeenCalledTimes(1);
    expect(retries).toHaveBeenCalledWith(1);
  });

  it('should have the retry if one retries is a number', () => {
    const c = {
      retries: 5,
    };
    const actual = config(c);

    expect(actual).toEqual(jasmine.objectContaining({ retry: 5 }));
  });

  it('should have the default retry if no retries passed in', () => {
    const c = {};
    const actual = config(c);

    expect(actual).toEqual({ retry: 1 });
  });
});
