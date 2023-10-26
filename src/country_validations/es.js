const { testStringAgainstRegex } = require("../utils");

/**
 * Validates a Spanish Número de Identificación Fiscal (NIF) number.
 *
 * @param {string} nif - The NIF number to validate.
 * @returns {boolean} - Returns true if the NIF is valid, false otherwise.
 *
 * This function checks if the provided NIF number adheres to the format requirements for a Spanish NIF:
 * - It must consist of 8 digits followed by an uppercase letter.
 * - The last character is a checksum letter obtained using the modulo 23 algorithm.
 * - The algorithm ensures that the NIF number is correctly formatted and that the checksum is valid.
 */
const validateNifES = (nif) => {
  const nifPattern = /^\d{8}[A-Z]$/;
  if (!testStringAgainstRegex(nif, nifPattern)) return false;

  if (!validateModulo23AlgorithmChecksum(nif)) return false;

  return true;
};

/**
 * Validates a Spanish Número de Identificación de Extranjero (NIE) number.
 *
 * @param {string} nie - The NIE number to validate.
 * @returns {boolean} - Returns true if the NIE is valid, false otherwise.
 *
 * This function checks if the provided NIE number adheres to the format requirements for a Spanish NIE:
 * - It must start with a letter (X, Y, or Z), followed by 7 digits, and end with an uppercase letter.
 * - The first letter is substituted with a number (X: 0, Y: 1, Z: 2) for the checksum.
 * - The last character is a checksum letter obtained using the modulo 23 algorithm.
 */
const validateNieES = (nie) => {
  const niePattern = /^[XYZ]\d{7}[A-Z]$/;
  if (!testStringAgainstRegex(nie, niePattern)) return false;

  const firstLetter = nie[0];
  const digitSubstitution = {
    X: "0",
    Y: "1",
    Z: "2",
  };

  const checksumNie = digitSubstitution[firstLetter] + nie.slice(1);

  if (!validateModulo23AlgorithmChecksum(checksumNie)) return false;

  return true;
};

/**
 * Validates a Spanish passport number.
 *
 * @param {string} passport - The passport number to validate.
 * @returns {boolean} - Returns true if the passport is valid, false otherwise.
 *
 * This function checks if the provided Spanish passport number adheres to the format requirements:
 * - It must consist of 3 letters followed by 6 digits and an optional letter.
 */
const validatePassportES = (passport) => {
  const passportPattern = /^[A-Z]{3}\d{6}[A-Z]?$/;
  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

/**
 * Validates a Spanish Value Added Tax (VAT) number.
 *
 * @param {string} vat - The VAT number to validate.
 * @returns {boolean} - Returns true if the VAT number is valid, false otherwise.
 *
 * This function checks if the provided Spanish VAT number adheres to the format requirements:
 * - It must start with "ES" (for Spain), followed by a NIF format.
 */
const validateVatES = (vat) => {
  vat = vat.toUpperCase();

  // Check if the VAT number starts with ES
  if (vat.slice(0, 2) !== "ES") return false;

  // Check if the VAT number (without starting ES) is a valid NIF
  if (!validateNifES(vat.slice(2))) return false;

  return true;
};

/**
 * Validates the checksum of a Spanish identity document using the modulo 23 algorithm.
 *
 * @param {string} idDoc - The identity document number to validate.
 * @returns {boolean} - Returns true if the checksum is valid, false otherwise.
 *
 * This function performs a checksum validation based on the modulo 23 algorithm for Spanish identity documents.
 */
const validateModulo23AlgorithmChecksum = (idDoc) => {
  idDoc = idDoc.toUpperCase();

  // Valid letters for control
  const validControlLetters = "TRWAGMYFPDXBNJZSQVHLCKE";

  // Separate numeric part from control letter
  const numericPart = idDoc.slice(0, -1);
  const providedControlLetter = idDoc.slice(-1);

  // Calculate the control letter index
  const numericValue = parseInt(numericPart, 10);
  const expectedControlLetterIndex = numericValue % 23;

  // Get the expected control letter
  const expectedControlLetter = validControlLetters[expectedControlLetterIndex];

  // Compare the provided control letter with the expected one
  if (providedControlLetter !== expectedControlLetter) return false;

  return true;
};

module.exports = {
  validateNieES,
  validateNifES,
  validatePassportES,
  validateVatES,
};
