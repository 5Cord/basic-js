const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const bannedCols = new Set();

  for (let row of matrix) {
    row.forEach((value, idx) => {
      if (!bannedCols.has(idx)) {
        sum += value;
        if (value === 0) bannedCols.add(idx);
      }
    });
  }

  return sum;
}
module.exports = {
  getMatrixElementsSum
};
