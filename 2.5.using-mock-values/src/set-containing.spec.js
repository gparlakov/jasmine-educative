describe('setContaining', () => {
  // part 4 setContaining
  it('showcase jasmine.setContaining', () => {
    expect(new Set(['one', 'two', 'three'])).toEqual(jasmine.setContaining(new Set(['one', 'two'])));
  });

  xit('showcase jasmine.setContaining failing case', () => {
    expect(new Set(['one', 'three'])).toEqual(jasmine.setContaining(new Set(['one', 'two'])));
  });
});
