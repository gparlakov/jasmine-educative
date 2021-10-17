describe('firstNChars', () => {

  // part 2 - string matching
  it('showcase the jasmine.stringMatching', () => {
    expect('a string').toEqual(jasmine.stringMatching('string'));
    expect('a string').toEqual(jasmine.stringMatching('strin'));
    expect('a string').toEqual(jasmine.stringMatching('stri'));
    expect('a string').toEqual(jasmine.stringMatching('a'));
    expect('a string').toEqual(jasmine.stringMatching(' '));
  });

  xit('showcase the jasmine.stringMatching failing case', () => {
    expect('a string').toEqual(jasmine.stringMatching('not this'));
  });
});
