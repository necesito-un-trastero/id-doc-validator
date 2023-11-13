const { testStringAgainstRegex } = require("../utils");

const validatePassportCY = (passport) => {
  const passportPattern = /^[A-Z]\d{6,8}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatCY = (vat) => {
  const vatPattern = /^CY\d{8}[A-Z]$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validatePassportCY,
  validateVatCY,
};
