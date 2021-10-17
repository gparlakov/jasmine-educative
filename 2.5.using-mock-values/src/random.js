function getRandomNumberUpTo(max) {
 return Math.floor(Math.random()*max);
}

exports.randomString = function () {
  const random = getRandomNumberUpTo(5);
  return ['one', 'two', 'three', 'four', 'five'][random];
}

exports.randomNumber = function (max) {
  return getRandomNumberUpTo(max || 100);
}
