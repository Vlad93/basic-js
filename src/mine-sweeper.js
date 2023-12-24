const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let resultMatrix = [...matrix];
  for (let i = 0; i < matrix.length; i++) {    
    for (let j = 0; j < matrix[i].length; j++) {      
      let countMines = 0;
      if (matrix[i][j]) {
        countMines += 1;
      } else {
        // condition first column
        if (j > 0 && matrix[i][j - 1]) {
          countMines += 1;
        }
        // condition last column
        if (j < matrix[i].length - 1 && matrix[i][j + 1]) {
          countMines += 1;
        }
        // condition first row
        if (i > 0 && matrix[i - 1][j]) {
          countMines += 1;
        }
        // condition last row
        if (i < matrix.length - 1 && matrix[i + 1][j]) {
          countMines += 1;
        }        
      }      
      resultMatrix[i][j] = countMines;      
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
