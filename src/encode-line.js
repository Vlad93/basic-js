const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let strArr = str.split('');
  let resultArr = [];
  let counter = 1;
  for (let i = 0; i < strArr.length; i++) {
    if(strArr[i] === strArr[i + 1]) {
      counter++;
    } else {
      counter > 1 ? resultArr.push(`${counter}${strArr[i]}`) : resultArr.push(`${strArr[i]}`);
      counter = 1;
    }
  }
  return resultArr.join('');
}

module.exports = {
  encodeLine
};
