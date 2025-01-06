const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  return names.reduce((acc, name) => {
    let uniqName = name;
    let counter = 1;
    while (acc.includes(uniqName)) {
      uniqName = `${name}(${counter})`;
      counter += 1;
    }
    return [...acc, uniqName];
  }, []);
}

module.exports = {
  renameFiles,
};
