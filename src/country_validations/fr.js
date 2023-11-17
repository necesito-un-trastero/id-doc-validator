const { testStringAgainstRegex } = require("../utils");

/**
 * Validates a French Carte Nationale d'Identité (CNI) number.
 *
 * @param {string} cni - The CNI number to validate.
 * @returns {boolean} - Returns true if the CNI is valid, false otherwise.
 *
 * This function checks if the provided CNI number adheres to the expected format, which consists of 12 digits.
 */
const validateCniFR = (cni) => {
  const cniPattern = /^\d{12}$/;
  if (!testStringAgainstRegex(cni, cniPattern)) return false;

  return true;
};

/**
 * Validates a French Value Added Tax (VAT) number.
 *
 * @param {string} vat - The VAT number to validate.
 * @returns {boolean} - Returns true if the VAT number is valid, false otherwise.
 *
 * This function checks if the provided French VAT number adheres to the expected format,
 * starting with "FR" and followed by 11 alphanumeric characters (first two can be letters or digits, following 9 can only be digits).
 */
const validateVatFR = (vat) => {
  const vatPattern = /^FR[A-Z0-9]{2}\d{9}$/;
  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateCniFR,
  validateVatFR,
};
