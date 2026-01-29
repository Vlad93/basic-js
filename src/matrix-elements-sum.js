const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  console.log(matrix);
  const result = matrix.reduce((acc, item, idx, arr) => {
    for (let i = 0; i < item.length; i++) {
      if(idx === 0) {
        acc += item[i];
      } else {
        console.log(arr[idx - 1][i])
        if (arr[idx - 1][i] !== 0) {
          acc += item[i];
        }
      }      
    }
    return acc;
  }, 0);
  return result;
}

module.exports = {
  getMatrixElementsSum
};
