const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code heres 
  const repeatStr = `${str}`;   
  let resultArr = [];
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;  
  if (!separator) {
    separator = '+';
  }
  if (!additionSeparator) {
    additionSeparator = '|';
  }  
  if (!repeatTimes) {
    repeatTimes = 1;
  }
  if (addition && !additionRepeatTimes) {
    additionRepeatTimes = 1;
  }
  for (let i = 1; i <= repeatTimes; i++) {
    if(i === 1) {
      resultArr.push(repeatStr);
    } else {
      resultArr.push(`${separator}${repeatStr}`);
    }      
    const additionStr = String(addition);
    for (let j = 1; j <= additionRepeatTimes; j++) {
      if (j === 1) {
        resultArr.push(additionStr);
      } else {
        resultArr.push(`${additionSeparator}${additionStr}`);
      }      
    }      
  }
  return resultArr.join('');    
  
}

module.exports = {
  repeater
};
