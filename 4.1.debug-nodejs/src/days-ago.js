/**
 * How many days ago was a date
 * @param {Date} date
 */
exports.daysAgo = function(date) {
  const nowMilliseconds = Date.now();
  const dateMilliseconds = date.valueOf();

  const agoMilliseconds = nowMilliseconds - dateMilliseconds;

  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const daysAgo = agoMilliseconds / millisecondsInADay;
  console.log('--------', 'ago', daysAgo, 'msAgo', agoMilliseconds);
  return Math.round(daysAgo);
}
