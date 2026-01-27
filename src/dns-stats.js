const { NotImplementedError } = require('../lib');

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
  const result = {};
  let splitDomains = domains.map((item) => item.split('.').reverse());
  for (let i = 0; i < splitDomains.length; i++) {
    let helpStr = '';
    for (let j = 0; j < splitDomains[i].length; j++) {
      helpStr += `.${splitDomains[i][j]}`;
      if(!result[helpStr]) {
        result[helpStr] = 1;
      } else {
        result[helpStr] =  result[helpStr] + 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
