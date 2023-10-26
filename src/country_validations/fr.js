/**
 * Validates a French Carte Nationale d'Identité (CNI) number.
 *
 * @param {string} cni - The CNI number to validate.
 * @returns {boolean} - Returns true if the CNI is valid, false otherwise.
 *
 * This function checks if the provided CNI number adheres to the expected format, which consists of 12 digits.
 */
const validateCniFR = (cni) => {
  cni = cni.toUpperCase();

  // Regular expression to match a CNI with 12 digits
  const cniPattern = /^\d{12}$/;

  // Check if the CNI matches the pattern
  if (!cniPattern.test(cni)) return false;

  return true;
};

/**
 * Validates a French passport number.
 *
 * @param {string} passport - The passport number to validate.
 * @returns {boolean} - Returns true if the passport is valid, false otherwise.
 *
 * This function checks if the provided French passport number adheres to the expected format,
 * which consists of 2 digits, 2 letters, and 5 digits.
 */
const validatePassportFR = (passport) => {
  passport = passport.toUpperCase();

  // Regular expression to match a French passport number with 2 digits, 2 letters and 5 digits
  const passportPattern = /^\d{2}[A-Z]{2}\d{5}$/;

  // Check if the passport number matches the pattern
  if (!passportPattern.test(passport)) return false;

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
  vat = vat.toUpperCase();

  // Check if the VAT number starts with FR
  if (vat.slice(0, 2) !== "FR") return false;

  // Regular expression to match a french VAT: (XX999999999). The first two can be letters or digits, the rest must be digits
  const vatPattern = /^[A-Z0-9]{2}\d{9}$/;

  // Check if the VAT number matches the pattern
  if (!vatPattern.test(vat.slice(2))) return false;

  return true;
};

module.exports = {
  validateCniFR,
  validatePassportFR,
  validateVatFR,
};
