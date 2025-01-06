const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numToStr = n.toString();
  let maxNum = 0;
  for (i = 0; i < numToStr.length; i += 1) {
    const newNum = parseInt(
      numToStr.substring(0, i) + numToStr.substring(i + 1),
      10
    );
    maxNum = Math.max(maxNum, newNum);
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};
