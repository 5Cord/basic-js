const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  
  const newArr = [];
  let skipNext = false;

  for (let idx = 0; idx < arr.length; idx++) {
    const thing = arr[idx];

    if (skipNext) {
      skipNext = false;
      continue;
    }

    if (thing === '--discard-next') {
      skipNext = true;
    } else if (thing === '--discard-prev') {
      if (newArr.length && arr[idx - 2] !== '--discard-next') newArr.pop();
    } else if (thing === '--double-next') {
      if (idx + 1 < arr.length) newArr.push(arr[idx + 1]);
    } else if (thing === '--double-prev') {
      if (idx > 0 && arr[idx - 2] !== '--discard-next') newArr.push(newArr[newArr.length - 1]);
    } else {
      newArr.push(thing);
    }
  }

  return newArr;
}

module.exports = {
  transform
};
