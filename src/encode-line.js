const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const charsArr = str.split('');
  let newCharsArr = [];
  let curChar = charsArr[0];
  let counter = 1;
  for (let i = 1; i < charsArr.length; i++) {    
    if (curChar === charsArr[i]) {
      counter++;
      if (i === charsArr.length - 1) {        
        counter > 1 ? newCharsArr.push(`${counter}${curChar}`) : newCharsArr.push(curChar);
      }
    } else {      
      counter > 1 ? newCharsArr.push(`${counter}${curChar}`) : newCharsArr.push(curChar);
      if (i === charsArr.length - 1) {
        newCharsArr.push(charsArr[i]);
        break;
      }
      counter = 1;
      curChar = charsArr[i];
    }        
  }
  return newCharsArr.join('');
}

module.exports = {
  encodeLine
};
