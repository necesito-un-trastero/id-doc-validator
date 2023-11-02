const {
  testStringAgainstRegex,
  getNumberFromChar,
  isValidLuhn,
} = require("../utils");

/**
 * Validates a Portuguese "Cartão de Cidadão" number.
 *
 * @param {string} cartaoCidadao - The Portuguese "Cartão de Cidadão" number to validate.
 * @returns {boolean} - Returns true if the "Cartão de Cidadão" number is valid, false otherwise.
 */
const validateCcPT = (cc) => {
  const ccPattern = /^\d{8}[ -]?\d[ -]?[A-Z0-9]{2}\d$/;
  if (!testStringAgainstRegex(cc, ccPattern)) return false;

  if (!validateChecksum(cc)) return false;

  return true;
};

/**
 * Validates a Portuguese passport number.
 *
 * @param {string} passport - The Portuguese passport number to validate.
 * @returns {boolean} - Returns true if the passport number is valid, false otherwise.
 */
const validatePassportPT = (passport) => {
  // Regular expression for Portuguese passport validation
  const passportPattern = /^[A-Z]\d{6}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;
  return true;
};

/**
 * Validates a Portuguese NIF (Número de Identificação Fiscal) number.
 *
 * @param {string} nif - The Portuguese NIF number to validate.
 * @returns {boolean} - Returns true if the NIF number is valid, false otherwise.
 */
const validateNifPT = (nif) => {
  const nifPattern = /^\d{9}$/;

  if (!testStringAgainstRegex(nif, nifPattern)) return false;
  if (!validateNifControlDigit(nif)) return false;

  return true;
};

/**
 * Validates a Portuguese Value Added Tax (VAT) number.
 *
 * @param {string} vat - The Portuguese VAT number to validate.
 * @returns {boolean} - Returns true if the VAT number is valid, false otherwise.
 */
const validateVatPT = (vat) => {
  // Regular expression for VAT validation
  const vatPattern = /^PT\d{9}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;
  if (!validateNifPT(vat.slice(2))) return false;

  return true;
};

/**
 * Validates a "Cartão de Cidadão" number using the Luhn algorithm.
 *
 * @param {string} cc - The "Cartão de Cidadão" number to validate.
 * @returns {boolean} - Returns true if the "Cartão de Cidadão" number is valid, false otherwise.
 *
 * This function checks if the provided "Cartão de Cidadão" number passes the Luhn algorithm.
 */
const validateChecksum = (cc) => {
  let sum = 0;
  let secondDigit = false;

  for (let i = cc.length - 1; i >= 0; --i) {
    let value = getNumberFromChar(cc[i]);
    if (value > -1) {
      if (secondDigit) {
        value = value * 2;
        if (value > 9) {
          value = value - 9;
        }
      }
      sum += value;
      secondDigit = !secondDigit;
    }
  }

  return sum % 10 === 0;
};

/**
 * Validates the control digit of a Portuguese NIF (Número de Identificação Fiscal).
 *
 * @param {string} nif - The NIF number to validate.
 * @returns {boolean} - Returns true if the control digit of the NIF is valid, false otherwise.
 *
 * This function checks the control digit of a Portuguese NIF to ensure it matches the calculated control digit.
 */
const validateNifControlDigit = (nif) => {
  let added = 0;
  for (let i = 0; i < 8; i++) {
    added += parseInt(nif[i]) * (9 - i);
  }

  let control = added % 11 <= 1 ? 0 : 11 - (added % 11);

  return parseInt(nif[8]) === control;
};

module.exports = {
  validateCcPT,
  validatePassportPT,
  validateNifPT,
  validateVatPT,
};
