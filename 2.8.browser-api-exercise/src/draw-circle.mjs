/**
 * Draw a circle within the element with a given radius
 * @param {HTMLElement} element
 * @param radius number
 */
 export function drawCircle(element, radius) {
  const canvas = document.createElement('canvas');
  element.appendChild(canvas);
  const context = canvas.getContext('2d');
  context.arc(radius, radius, radius, 0, 360);
}
