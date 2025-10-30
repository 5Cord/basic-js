const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Array(disksNumber).fill(2).reduce((a, b) => a * b, 1) / 2;
  const totalTurns = Math.floor(turns * 2 - 1);
  const seconds = Math.floor((totalTurns / turnsSpeed) * 3600);
  return { turns: totalTurns, seconds };
}

module.exports = {
  calculateHanoi
};
