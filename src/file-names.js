const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let namesCopy = names.slice();
  const resultArr = []; 
  namesCopy.reduce((acc, item) => {   
    if (Object.keys(acc).includes(item)) {
      const countItem = acc[item];
      const newItem = (`${item}(${countItem})`);
      acc[item]++;
      acc[newItem] = 1;
      resultArr.push(`${item}(${countItem})`);         
      return acc;
    }
    resultArr.push(item);
    acc[item] = 1;
    return acc;
  }, {});
  return resultArr;
}


module.exports = {
  renameFiles
};
