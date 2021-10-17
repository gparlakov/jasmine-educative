describe('arrayContaining', () => {

  it('showcase jasmine.arrayContaining', () => {
    expect([1,2,3,4,5]).toEqual(jasmine.arrayContaining([2,5]));
    expect([2,5]).toEqual(jasmine.arrayContaining([2,5]));
    expect([1,2,3,4,5]).toEqual(jasmine.arrayContaining([5]));
  });

  xit('showcase jasmine.arrayContaining failing case', () => {
    expect([1,2,3,4,5]).toEqual(jasmine.arrayContaining([6]));
  });
});
