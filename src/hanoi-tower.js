const { NotImplementedError } = require("../extensions/index.js");

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
  if (typeof disksNumber !== "number" || disksNumber < 0) {
    throw new Error("Invalid number of disks");
  }
  if (typeof turnsSpeed !== "number" || turnsSpeed <= 0) {
    throw new Error("Invalid turns speed");
  }
  const calcTurns = (n) => Math.pow(2, n) - 1;
  const calcTime = (turns, speed) => Math.floor((turns / speed) * 3600);
  const turns = calcTurns(disksNumber);
  const seconds = calcTime(turns, turnsSpeed);

  return { turns, seconds };
}

module.exports = {
  calculateHanoi,
};
