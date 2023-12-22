const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arrCopy = arr.slice();
  const negativeValuesIdxArr = [];
  arrCopy.filter((item, idx) => {
    if (item < 0) {
      negativeValuesIdxArr.push(idx);
    }
  });
  let resultArr = arrCopy.filter(item => item >= 0).sort((a, b) => a - b);
  negativeValuesIdxArr.forEach((idx) => {
    resultArr.splice(idx, 0, -1);
  });
  return resultArr;
}

module.exports = {
  sortByHeight
};
