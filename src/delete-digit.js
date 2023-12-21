const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let avaliableNumbArr = [];
  const numArr = n.toString().split('');
  numArr.forEach((item, idx) => {
    const newNumArr = [...numArr];
    newNumArr.splice(idx, 1);
    avaliableNumbArr.push(+(newNumArr.join('')));
  });
  return Math.max(...avaliableNumbArr);
}

module.exports = {
  deleteDigit
};
