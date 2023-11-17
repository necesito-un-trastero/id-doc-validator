const { testStringAgainstRegex } = require("../utils");

const validateVatSK = (vat) => {
  const vatPattern = /^(SK)(\d{10})$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  // VAT number must be divisible by 11
  const vatWithoutCountryCode = vat.slice(2);
  const vatNumber = parseInt(vatWithoutCountryCode);
  if (vatNumber % 11 !== 0) return false;

  return true;
};

module.exports = {
  validateVatSK,
};
