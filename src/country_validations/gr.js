const { testStringAgainstRegex } = require("../utils");

const validateVatGR = (vat) => {
  const vatPattern = /^EL\d{9}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  if (!validateGreekVatChecksum(vat.slice(2, vat.length))) return false;

  return true;
};

/**
 * Checks the check digit of a Greek VAT number.
 * Code adapted from  Stack Overflow:
 * https://stackoverflow.com/questions/4375511/greek-vat-validation-number-code
 *
 * @param {string} vatNumber - The Greek VAT number to validate.
 * @returns {boolean} - Returns true if the check digit is valid, false otherwise.
 */
const validateGreekVatChecksum = (vatNumber) => {
  var total = 0;
  var multipliers = [256, 128, 64, 32, 16, 8, 4, 2];

  if (vatNumber.length !== 8 && vatNumber.length !== 9) return false;

  // Eight character numbers should be prefixed with a 0
  if (vatNumber.length == 8) {
    vatNumber = "0" + vatNumber;
  }

  // Extract the next digit and multiply by the counter.
  for (var i = 0; i < 8; i++)
    total = total + Number(vatNumber.charAt(i)) * multipliers[i];

  // Establish check digit.
  total = total % 11;
  if (total > 9) {
    total = 0;
  }

  // Compare it with the last character of the VAT number. If it is the same,
  // then it's a valid check digit.
  if (total == vatNumber.slice(8, 9)) return true;

  return false;
};

module.exports = {
  validateVatGR,
};
