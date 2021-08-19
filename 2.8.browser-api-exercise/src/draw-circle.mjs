/**
 * Draw a circle within the element with a given width
 * @param {HTMLElement} element
 * @param width number
 */
export function drawCircle(element, width) {
  const canvas = document.createElement('canvas');
  element.appendChild(canvas);
  const context = canvas.getContext('2d');
  context.arc(width, width, width, 0, 360);
}
