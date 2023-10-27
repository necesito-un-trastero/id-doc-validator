const { testStringAgainstRegex, isValidLuhn } = require("../utils");

/**
 * Validates an Italian Codice Fiscale (CF) number.
 *
 * @param {string} cf - The Codice Fiscale (CF) number to validate.
 * @returns {boolean} - Returns true if the CF is valid, false otherwise.
 *
 * This function checks if the provided CF number adheres to the format requirements for an Italian CF:
 * - It must consist of 16 characters, including letters and digits.
 * - The CF format is specific and includes character positions for personal details.
 * - It checks if the CF format is correct and if the checksum is valid.
 */
const validateCfIT = (cf) => {
  const cfPattern = /^[A-Z]{6}\d{2}[A-EHLMPR-T]\d{2}[A-Z0-9]{4}[A-Z]$/;

  if (!testStringAgainstRegex(cf, cfPattern)) return false;

  if (!validateChecksumCfIT(cf)) return false;

  return true;
};

/**
 * Validates an Italian passport number.
 *
 * @param {string} passport - The passport number to validate.
 * @returns {boolean} - Returns true if the passport is valid, false otherwise.
 *
 * This function checks if the provided passport number adheres to the format requirements for an Italian passport:
 * - It must consist of 9 characters, including letters and digits.
 */
const validatePassportIT = (passport) => {
  const passportPattern = /^[0-9A-Z]{2}\d{7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

/**
 * Validates an Italian Value Added Tax (VAT) number.
 *
 * @param {string} vat - The VAT number to validate.
 * @returns {boolean} - Returns true if the VAT is valid, false otherwise.
 *
 * This function checks if the provided VAT number adheres to the format requirements for an Italian VAT:
 * - It must start with "IT" followed by 11 digits, possibly separated by a separator (space, dot, hyphen, or comma).
 * - The VAT format also includes a checksum validation using the Luhn algorithm.
 */
const validateVatIT = (vat) => {
  const vatPattern = /^IT[ .\-,]?\d{11}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  const vatWithoutCountryCodeAndSeparator = vat
    .slice(2)
    .replace(/[ .\-,]/g, "");

  if (!isValidLuhn(vatWithoutCountryCodeAndSeparator)) return false;

  return true;
};

/**
 * Validates the control letter of an Italian Codice Fiscale (CF) number.
 *
 * @param {string} cf - The Codice Fiscale number to validate, including the control letter.
 * @returns {boolean} - Returns true if the control letter is valid, false otherwise.
 *
 * This function checks the validity of the control letter of an Italian CF number
 * based on the provided CF, excluding the control letter, using a specific algorithm.
 */
const validateChecksumCfIT = (cf) => {
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const oddCharactersValues = [
    1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4,
    18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23,
  ];
  const evenCharactersValues = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  ];

  const cfWithoutControlLetter = cf.slice(0, -1);
  const providedCfControlLetter = cf.slice(-1);

  let evenCharactersSum = 0;
  let oddCharactersSum = 0;

  for (let i = 1; i <= cfWithoutControlLetter.length; i++) {
    const character = cfWithoutControlLetter[i - 1];
    const characterIndex = characters.indexOf(character);

    if (i % 2 === 0) {
      evenCharactersSum += evenCharactersValues[characterIndex];
    } else {
      oddCharactersSum += oddCharactersValues[characterIndex];
    }
  }

  const controlCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const controlCharacterIndex = (evenCharactersSum + oddCharactersSum) % 26;
  const expectedCfControlLetter = controlCharacters[controlCharacterIndex];

  return providedCfControlLetter === expectedCfControlLetter;
};

module.exports = {
  validateCfIT,
  validatePassportIT,
  validateVatIT,
};
