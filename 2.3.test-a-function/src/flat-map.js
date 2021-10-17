Array.prototype.flatMap = function(cb) {
  return this.map(cb).reduce((acc, n) => acc.concat(n), []);
}