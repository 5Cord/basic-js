const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    const stack = [[arr, 1]];

    while (stack.length) {
      const [current, depth] = stack.pop();
      maxDepth = Math.max(maxDepth, depth);

      for (const el of current) {
        if (Array.isArray(el)) {
          stack.push([el, depth + 1]);
        }
      }
    }

    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
