describe('objectContaining', () => {

  // part 3 object containing
  it('showcase jasmine.objectContaining', () => {
    expect({ x: 1, y: 2 }).toEqual(jasmine.objectContaining({ x: 1 }));
    expect({ x: 1 }).toEqual(jasmine.objectContaining({ x: 1 }));
    expect(Object.assign({ x: 1 }, {})).toEqual(jasmine.objectContaining({ x: 1 }));
  });

  xit('showcase jasmine.objectContaining failing a test', () => {
    expect({ xx: 1, y: 2 }).toEqual(jasmine.objectContaining({ x: 1 }));
  });

});
