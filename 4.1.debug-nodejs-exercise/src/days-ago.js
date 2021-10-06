/**
 * How many days ago was a date
 * @param {Date} date
 */
exports.daysAgo = function(date) {
  const nowMilliseconds = Date.now();
  const dateMilliseconds = date.valueOf();

  const agoMilliseconds = nowMilliseconds - dateMilliseconds;

  const millisecondsInADay = 84200000;
  const daysAgo = agoMilliseconds / millisecondsInADay;
  return Math.round(daysAgo);
}
