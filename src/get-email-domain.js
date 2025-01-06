const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (typeof email !== "string" || !email.includes("@")) {
    throw new Error("Invalid email format");
  }

  const parts = email.split("@");
  const domain = parts[parts.length - 1];

  if (!domain || domain.trim() === "") {
    throw new Error("Invalid domain");
  }
  return domain;
}

module.exports = {
  getEmailDomain,
};
