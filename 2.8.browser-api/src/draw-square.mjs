/**
 * Draw a square within the element with a given width
 * @param {HTMLElement} element
 * @param width number
 */
export function drawSquare(element, width) {
  const canvas = document.createElement('canvas');
  element.appendChild(canvas);
  const context = canvas.getContext('2d');
  context.rect(0, 0, width, width);
}
