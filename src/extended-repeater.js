const { NotImplementedError } = require('../lib');

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
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;
  repeatTimes = repeatTimes ? repeatTimes : 1;
  separator = separator ? separator : '+';
  addition = `${addition}` === 'undefined' ? '' : `${addition}`;
  additionRepeatTimes = additionRepeatTimes ? additionRepeatTimes : 1;
  additionSeparator = additionSeparator ? additionSeparator : '|';
  let result = '';
  for (let i = repeatTimes; i > 0; i--) {
    result += `${str}`;
    for (let j = additionRepeatTimes; j > 0; j--) {
      result += addition;
      if(j > 1) {
        result += additionSeparator;
      }
    }
    if(i > 1) {
      result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
