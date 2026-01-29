const { NotImplementedError } = require('../lib');

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
  if(!arr.includes(-1)) {
    return arr.sort((a, b) => a - b);
  }
  const indexesOfMinusOne = arr.reduce((acc, item, idx) => {
    if (item === -1) {
      acc.push(idx);
    }
    return acc;
  }, []);
  let sortedArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  for (let i = 0; i < indexesOfMinusOne.length; i++) {
    sortedArr.splice(indexesOfMinusOne[i], 0, -1);
  }
  return sortedArr;
}

module.exports = {
  sortByHeight
};
