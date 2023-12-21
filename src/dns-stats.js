const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};  
  if (domains.length) {
    const domainsArr = [...domains].sort((a, b) => b.localeCompare(a))[0].split('.').reverse(); 
    let searchStr = '';
    let keyStr = '';  
    for (let i = 0; i < domainsArr.length; i++) {
      i === 0 ? searchStr = domainsArr[i] : searchStr = `${domainsArr[i]}.${searchStr}`;
      keyStr = `${keyStr}.${domainsArr[i]}`;   
      const countOfDomain = domains.filter(item => item.includes(searchStr)).length;      
      result[keyStr] = countOfDomain;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
