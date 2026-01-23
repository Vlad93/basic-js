const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {   
    let maxDepth = 1;
    const isArray = (item) => Array.isArray(item);
    const helper = (depth, array) => { 
      maxDepth = Math.max(depth, maxDepth);
      for(let i = 0; i < array.length; i++) {
        if (isArray(array[i])) {
          helper(depth + 1, array[i]);
        }
      }
    }
    helper(1, arr);
    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
