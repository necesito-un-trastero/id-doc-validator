const { testStringAgainstRegex } = require("../utils");

/**
 * Validates a German identity card number (< 1 November, 2010) or (>= 1 November, 2010).
 *
 * @param {string} gic - The German identity card number to validate.
 * @returns {boolean} - Returns true if the gic is valid, false otherwise.
 * @todo - Implement the checksum validation.
 */
const validateGicDE = (gic) => {
  // Regular expression to match a German identity card number (< 1 November, 2010)
  const oldGicPattern = /^\d{10}$/;

  // Regular expression to match a German identity card number (>= 1 November, 2010)
  const newGicPattern = /^[LMNPRTVWXY][CFGHJKLMNPRTVWXYZ0-9]{8}\d?D?$/;

  if (
    !testStringAgainstRegex(gic, oldGicPattern) &&
    !testStringAgainstRegex(gic, newGicPattern)
  )
    return false;

  return true;
};

/**
 * Validates a German passport number.
 *
 * @param {string} passport - The German passport number to validate.
 * @returns {boolean} - Returns true if the passport is valid, false otherwise.
 * @todo - Implement the checksum validation.
 */
const validatePassportDE = (passport) => {
  const passportPattern = /^[CFGHJK][CFGHJKLMNPRTVWXYZ0-9]{8}\d?D?$/;
  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

/**
 * Validates a German Value Added Tax (VAT) number.
 *
 * @param {string} vat - The German VAT number to validate.
 * @returns {boolean} - Returns true if the VAT number is valid, false otherwise.
 * @todo - Implement the checksum validation.
 */
const validateVatDE = (vat) => {
  const vatPattern = /^DE\d{11}$/;
  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateGicDE,
  validatePassportDE,
  validateVatDE,
};
