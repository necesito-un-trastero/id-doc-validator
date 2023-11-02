/**
 * Validates a Portuguese "Cartão de Cidadão" number.
 *
 * @param {string} cartaoCidadao - The Portuguese "Cartão de Cidadão" number to validate.
 * @returns {boolean} - Returns true if the "Cartão de Cidadão" number is valid, false otherwise.
 */
const validateCartaoCidadaoPT = (cartaoCidadao) => {
  // Regular expression for "Cartão de Cidadão" validation
  const cartaoCidadaoPattern = /^\d{8}[ -]?\d[ -]?[A-Z0-9]{2}\d$/;

  if (!cartaoCidadaoPattern.test(cartaoCidadao)) return false;
  if (!validateChecksum(cartaoCidadao)) return false;

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
  const passportPattern = /^[A-Za-z]\d{6}$/;

  if (!passportPattern.test(passport)) return false;
  return true;
};

/**
 * Validates a Portuguese NIF (Número de Identificação Fiscal) number.
 *
 * @param {string} nif - The Portuguese NIF number to validate.
 * @returns {boolean} - Returns true if the NIF number is valid, false otherwise.
 */
const validateNifPT = (nif) => {
  // Regular expression for NIF validation
  const nifPattern = /^\d{9}$/;

  if (!nifPattern.test(nif)) return false;

  // Implement specific validation criteria for NIF
  let added = 0;
  for (let i = 0; i < 8; i++) {
    added += parseInt(nif[i]) * (9 - i);
  }

  let control = added % 11 <= 1 ? 0 : 11 - (added % 11);

  return parseInt(nif[8]) === control;
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

  if (!vatPattern.test(vat)) return false;
  if (!validateNifPT(vat.slice(2))) return false;

  return true;
};

const validateChecksum = (cartaoCidadao) => {
  let sum = 0;
  let secondDigit = false;

  for (let i = cartaoCidadao.length - 1; i >= 0; --i) {
    let value = getNumberFromChar(cartaoCidadao[i]);
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

const getNumberFromChar = (value) => {
  const charCode = value.toUpperCase().charCodeAt(0);

  if (charCode >= 48 && charCode <= 57) return charCode - 48;
  else if (charCode >= 65 && charCode <= 90) return charCode - 55;
  else return -1;
};

module.exports = {
  validateCartaoCidadaoPT,
  validatePassportPT,
  validateNifPT,
  validateVatPT,
};
