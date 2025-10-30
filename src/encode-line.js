const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) {
    return '';
  }

  let encoded = '';
  let count = 1;
  let char = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    } else {
      // Append the current run. If count is 1, we omit the number.
      encoded += (count > 1 ? count : '') + char;

      // Reset for the new run
      char = str[i];
      count = 1;
    }
  }

  // Append the last run
  encoded += (count > 1 ? count : '') + char;

  return encoded;
}

module.exports = {
  encodeLine
};
