/**
 * @param {number} num
 * @param {(s: number) => any} callback
 */
exports.maybeNumber = function maybeNumber(num, callback) {
  if(typeof num === 'number' && typeof callback === 'function') {
    return callback(num);
  }
}
