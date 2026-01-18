const { NotImplementedError } = require('../lib');

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
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  const errorMessage = 'Invalid date!'; 
  const isRealDate = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Date]' && !date.hasOwnProperty('toString');
  }
  if ((typeof date !== 'object') || !isRealDate(date) || !(date instanceof Date)) {
    throw new Error(errorMessage);
  }    
  const SEASONS = [
    { season: 'spring', months: [2, 3, 4] },
    { season: 'summer', months: [5, 6, 7] },
    { season: 'autumn', months: [8, 9, 10] },
    { season: 'winter', months: [11, 0, 1] }
  ]
  const month = date.getMonth();
  let { season } = SEASONS.find(({ months }) => months.includes(month));
  return season;
}

module.exports = {
  getSeason
};
