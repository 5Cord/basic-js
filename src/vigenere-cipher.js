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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(msg, key) {
    if (msg === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const text = msg.toUpperCase();
    const k = key.toUpperCase();
    let res = '';
    let j = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char >= 'A' && char <= 'Z') {
        const shift = (char.charCodeAt(0) - 65 + (k[j % k.length].charCodeAt(0) - 65)) % 26;
        res += String.fromCharCode(shift + 65);
        j++;
      } else {
        res += char;
      }
    }

    return this.isDirect ? res : res.split('').reverse().join('');
  }

  decrypt(msg, key) {
    if (msg === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const text = msg.toUpperCase();
    const k = key.toUpperCase();
    let res = '';
    let j = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char >= 'A' && char <= 'Z') {
        const shift = (char.charCodeAt(0) - 65 - (k[j % k.length].charCodeAt(0) - 65) + 26) % 26;
        res += String.fromCharCode(shift + 65);
        j++;
      } else {
        res += char;
      }
    }

    return this.isDirect ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
