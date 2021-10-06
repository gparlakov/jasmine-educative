/**
 * How many days ago was a date
 * @param {Date} date
 */
exports.daysUntil = function (date) {
  const nowMilliseconds = Date.now();
  const dateMilliseconds = date.valueOf();

  const until = dateMilliseconds - nowMilliseconds;

  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const daysAgo = until / millisecondsInADay;
  return Math.round(daysAgo);
}
