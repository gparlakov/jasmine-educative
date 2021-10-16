import { drawSquare } from '/__src__/draw-square.mjs';

describe('drawSquare', () => {
  it('should create canvas, append it in the element, get a 2d context and draw the square', () => {
    const contextMock = { rect: jasmine.createSpy('rect') };
    const canvasMock = { getContext: jasmine.createSpy('canvasMock') };
    const documentSpy = spyOn(document, 'createElement').and.returnValue(canvasMock);
    const element = { appendChild: jasmine.createSpy('appendChild') };

    drawSquare(element, 10);

    expect(documentSpy).toHaveBeenCalledTimes(1);
    expect(element.appendChild).toHaveBeenCalledOnceWith(canvasMock);
    expect(canvasMock.getContext).toHaveBeenCalledOnceWith('2d');
    expect(contextMock.rect).toHaveBeenCalledOnceWith(0, 0, 10, 10);
  });
});
