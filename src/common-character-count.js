const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  const uniqueS1Arr = Array.from(new Set(s1.split('')));  
  let countSymb = 0;
  let commonCount = 0;
  uniqueS1Arr.forEach((item) => {
    countSymb = s1Arr.filter((symb) => symb === item).length;
    if(s2Arr.includes(item)) {
      commonCount += Math.min(countSymb, s2Arr.filter((symb2) => symb2 === item).length);
    }
  });     
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
