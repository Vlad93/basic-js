const { NotImplementedError } = require('../lib');

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
  let arr = n.toString().split('').map((item) => parseInt(item));
  const initLength = arr.length;
  for (let i = 1; i < arr.length; i++) {
    if(arr[i - 1] < arr[i]) {
      arr.splice(i - 1, 1);    
      break;
    }    
  }
  if(initLength === arr.length) {
    arr.splice(arr.length - 1, 1);
  }
  return parseInt(arr.join(''));
}

module.exports = {
  deleteDigit
};
