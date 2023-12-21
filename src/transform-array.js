const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
   throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const arrCopy = arr.slice();  
  const newArr = arrCopy.reduce((acc, item, idx) => {
    switch(item) {
      case '--double-next': 
        if(acc[idx + 1]) {
          acc.splice(idx, 1, acc[idx + 1]); 
        } else {
          acc.splice(idx, 1);
        }          
      case '--double-prev': 
        if(acc[idx - 1])
          acc.splice(idx, 1, acc[idx - 1]);               
      case '--discard-next':
        if(acc[idx + 1])
          acc.splice(idx, 2);                
      case '--discard-prev': 
        if(acc[idx - 1])
          acc.splice(idx - 1, 2);     
      default:
        return acc;            
    }
  }, [...arrCopy]);  
  return newArr;
}

module.exports = {
  transform
};
