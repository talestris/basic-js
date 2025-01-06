const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const array1 = s1.split("").sort();
  const array2 = s2.split("").sort();
  let index1 = 0;
  let index2 = 0;
  let commonCount = 0;

  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] === array2[index2]) {
      commonCount += 1;
      index1 += 1;
      index2 += 1;
    } else if (array1[index1] < array2[index2]) {
      index1 += 1;
    } else {
      index2 += 1;
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
