const { testStringAgainstRegex } = require("../utils");

/**
 * Validates a United Kingdom (GB) VAT number.
 *
 * Country code GB followed by either:
 * - Standard: 9 digits
 * - Branch traders: 12 digits
 * - Government departments: the letters GD then 3 digits from 000 to 499 (e.g. GBGD001)
 * - Health authorities: the letters HA then 3 digits from 500 to 999 (e.g. GBHA599)
 *
 * @param {string} vat - The VAT number to validate.
 * @returns {boolean} - True if the VAT number is valid, false otherwise.
 */
const validateVatGB = (vat) => {
  const vatPatterns = [/^GB\d{9}$/, /^GB\d{12}$/, /^GBGD\d{3}$/, /^GBHA\d{3}$/];

  if (!vatPatterns.some((pattern) => testStringAgainstRegex(vat, pattern)))
    return false;

  const vatWithoutCountryCode = vat.slice(2);

  if (vatWithoutCountryCode.startsWith("GD")) {
    const departmentNumber = Number(vatWithoutCountryCode.slice(2));

    if (departmentNumber < 0 || departmentNumber > 499) return false;
  }
  if (vatWithoutCountryCode.startsWith("HA")) {
    const departmentNumber = Number(vatWithoutCountryCode.slice(2));

    if (departmentNumber < 500 || departmentNumber > 999) return false;
  }

  // TODO: Add check digit validation

  return true;
};

module.exports = {
  validateVatGB,
};
