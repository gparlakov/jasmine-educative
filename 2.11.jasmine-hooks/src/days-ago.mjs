/**
 * How many days ago was a date
 * @param {Date} date
 */
export function daysAgo(date) {
  const nowMilliseconds = Date.now();
  const dateMilliseconds = date.valueOf();

  const agoMilliseconds = nowMilliseconds - dateMilliseconds;

  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const daysAgo = agoMilliseconds / millisecondsInADay;
  return Math.round(daysAgo);
}
