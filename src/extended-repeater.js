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
  const t = options.repeatTimes || 1; 
  const s = options.separator === undefined ? '+' : String(options.separator); 
  const a = options.addition === undefined ? '' : String(options.addition); 
  const at = options.additionRepeatTimes || 1; 
  const as = options.additionSeparator === undefined ? '|' : String(options.additionSeparator); 

  const main = String(str);

  let addedPart = '';
  if (a !== '') {
    addedPart = Array(at).fill(a).join(as);
  }

  const block = main + addedPart;

  return Array(t).fill(block).join(s);
}

module.exports = {
  repeater
};
