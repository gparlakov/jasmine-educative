/**
 * @param {string} str
 * @param {(s: string) => any} callback
 */
exports.maybeString = function maybeString(str, callback) {
  if(typeof str === 'string' && typeof callback === 'function') {
    return callback(str);
  }
}
