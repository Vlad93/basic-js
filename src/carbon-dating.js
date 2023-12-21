const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  if (typeof sampleActivity === 'string') {
    const sampleActivityNum = +sampleActivity;
    if (!isNaN(sampleActivityNum)) {
      if(sampleActivityNum > 0 && sampleActivityNum <= MODERN_ACTIVITY) {
        const date = Math.ceil(Math.log(15 / sampleActivityNum) * HALF_LIFE_PERIOD / 0.693);       
        return date;    
      }        
    }
  }  
  return false;
}

module.exports = {
  dateSample
};
