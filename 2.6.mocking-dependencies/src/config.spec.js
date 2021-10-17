const { config } = require('./config');

describe('config', () => {
  it('should call the configure callback if one passed', () => {
    const c = {
      myConfig: 1,
      configure: () => {},
    };
    const configureSpy = spyOn(c, 'configure');
    config(c);

    expect(configureSpy).toHaveBeenCalled();
    expect(configureSpy).toHaveBeenCalledTimes(1);
    expect(configureSpy).toHaveBeenCalledWith(jasmine.objectContaining({ myConfig: 1 }));
  });

  it('should replace the configure callback', () => {
    const c = {
      myConfig: 1,
      configure: () => ({}),
    };
    const configureSpy = spyOn(c, 'configure').and.returnValue({ myConfig: 100 });
    const actual = config(c);

    expect(actual).toEqual({ myConfig: 100 });

    expect(configureSpy).toHaveBeenCalledTimes(1);
  });

  it('should call through to the the configure callback', () => {
    const c = {
      myConfig: 1,
      configure: (o) => {
        return { myConfig: o.myConfig * 5 };
      },
    };
    const configureSpy = spyOn(c, 'configure').and.callThrough();
    const actual = config(c);

    expect(actual).toEqual({ myConfig: 5 });

    expect(configureSpy).toHaveBeenCalledTimes(1);
  });
});
