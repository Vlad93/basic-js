const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const seasonObj = {
    winter: [11, 0, 1],
    spring: [2, 3 ,4],
    summer: [5, 6 ,7],
    autumn: [8, 9, 10],
  }
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || date[Symbol.toStringTag]) {
    throw new Error('Invalid date!');
  }
  for (let [key, value] of Object.entries(seasonObj)) {
    if (value.includes(date.getMonth())) {
      return key;
    } 
  }
}

module.exports = {
  getSeason
};
