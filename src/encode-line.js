const { NotImplementedError } = require("../extensions/index.js");

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
  if (!str) return "";

  let encodedStr = "";
  let currentChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === currentChar) {
      count += 1;
    } else {
      encodedStr += count > 1 ? `${count}${currentChar}` : currentChar;
      currentChar = str[i];
      count = 1;
    }
  }
  encodedStr += count > 1 ? `${count}${currentChar}` : currentChar;
  return encodedStr;
}

module.exports = {
  encodeLine,
};
