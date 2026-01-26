const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(boolean) {
    if(typeof boolean === 'boolean' && !boolean) {
      this.modification = 'reverse';
    } else {
      this.modification = 'direct';
    }
  }
  encrypt(str, key) {
    const errorMessage = 'Incorrect arguments!';
    if(!str || !key) {
      throw new Error(errorMessage);
    }
    const upperKey = key.toUpperCase();
    const minCharCode = 'A'.charCodeAt(0);
    const maxCharCode = 'Z'.charCodeAt(0);
    const isLatinChar = (char) => {
      return minCharCode <= char.charCodeAt(0) && char.charCodeAt(0) <= maxCharCode;
    }
    let result = str.toUpperCase().split('');
    let idx = 0;
    for (let i = 0; i < result.length; i++) {
      if (isLatinChar(result[i])) {
        const curCharCode = result[i].charCodeAt(0);
        const keyCharCode = idx < upperKey.length ? upperKey[idx].charCodeAt(0) : upperKey[idx % upperKey.length].charCodeAt(0);      
        const shift = keyCharCode - minCharCode;
        let newCode = curCharCode + shift;
        newCode = newCode <= maxCharCode ? newCode : minCharCode + (newCode - maxCharCode - 1);
        result[i] = String.fromCharCode(newCode);
        idx++;
      }
    }
    
    return this.modification === 'direct' ? result.join('') : result.reverse().join('');      
  }

  decrypt(str, key) {
    const errorMessage = 'Incorrect arguments!';
    if(!str || !key) {
      throw new Error(errorMessage);
    }
    const upperKey = key.toUpperCase();
    const minCharCode = 'A'.charCodeAt(0);
    const maxCharCode = 'Z'.charCodeAt(0);
    const isLatinChar = (char) => {
      return minCharCode <= char.charCodeAt(0) && char.charCodeAt(0) <= maxCharCode;
    }
    let result = str.toUpperCase().split('');
    let idx = 0;
    for (let i = 0; i < result.length; i++) {
      if (isLatinChar(result[i])) {
        const curCharCode = result[i].charCodeAt(0);
        const keyCharCode = idx < upperKey.length ? upperKey[idx].charCodeAt(0) : upperKey[idx % upperKey.length].charCodeAt(0);      
        const shift = keyCharCode - minCharCode;
        let newCode = curCharCode - shift;
        newCode = newCode >= minCharCode ? newCode : maxCharCode - (minCharCode - newCode - 1);
        result[i] = String.fromCharCode(newCode);
        idx++;
      }
    }
    return this.modification === 'direct' ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
