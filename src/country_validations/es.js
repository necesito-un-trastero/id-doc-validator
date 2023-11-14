const { testStringAgainstRegex } = require("../utils");

/**
 * Validates a Spanish Número de Identificación Fiscal (NIF) number for individuals and companies.
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
  const personalNifPattern = /^\d{8}[A-Z]$/;
  const companyNifPattern = /^[ABCDEFGHJNPQRSUVW]\d{7}[0-9A-Z]$/;

  const isPersonalNif = testStringAgainstRegex(nif, personalNifPattern);
  const isCompanyNif = testStringAgainstRegex(nif, companyNifPattern);
  if (!isPersonalNif && !isCompanyNif) return false;

  if (isPersonalNif && !validateModulo23AlgorithmChecksum(nif)) return false;
  if (isCompanyNif && !validateCompanyNifControl(nif)) return false;

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

/**
 * Validates the control letter of a Spanish company's NIF (Número de Identificación Fiscal), previously CIF.
 *
 * @param {string} nif - The NIF to be validated.
 * @returns {boolean} - True if the provided NIF has a valid control letter, false otherwise.
 */
const validateCompanyNifControl = (nif) => {
  const isControlLetter = ["N", "P", "Q", "R", "S", "W"].includes(
    nif.slice(0, 1)
  );
  const centralDigits = nif.slice(1, -1);

  const providedControl = nif.slice(-1);

  // Add the digits of pairs
  let sum = 0;

  for (let i = 1; i < centralDigits.length; i += 2) {
    const digit = parseInt(centralDigits[i], 10);
    sum += digit;
  }

  // Add the digits of odd positions, multiplied by 2
  for (let i = 0; i < centralDigits.length; i += 2) {
    const digit = parseInt(centralDigits[i], 10) * 2;
    sum += digit;
  }

  // Take the units digit of the sum
  const unitsDigit = sum % 10;

  let expectedControl = unitsDigit;

  if (isControlLetter) {
    const controlLetter = "JABCDEFGHI".charAt(unitsDigit);

    if (unitsDigit === 10) controlLetter = "J";

    expectedControl = controlLetter;
  }

  if (typeof expectedControl === "number") {
    expectedControl = expectedControl.toString();
  }

  return providedControl === expectedControl;
};

module.exports = {
  validateNieES,
  validateNifES,
  validatePassportES,
  validateVatES,
};
